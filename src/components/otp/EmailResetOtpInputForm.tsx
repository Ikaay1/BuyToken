import { useRouter } from 'next/router';
import React, { useState } from 'react';
import OTPInput from 'react-otp-input';

import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { useValidateEmailOtpMutation } from '@/redux/services/auth.service';
import { Box, Button, useToast } from '@chakra-ui/react';

const EmailResetOtpInputForm = () => {
  const [otp, setOtp] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');
  const userName = useAppSelector((state) => state?.app?.user?.data?.userName);
  const otp_hash_reset = useAppSelector(
    (state) => state?.app?.user?.data?.otp_hash_reset,
  );
  const [validateEmailOtp, validateEmailOtpStatus] =
    useValidateEmailOtpMutation();
  const toast = useToast();
  const dispatch = useAppDispatch();

  return (
    <Box mt='1.35rem' width={{lg: '468px'}}>
      <OTPInput
        inputStyle={{
          width: '62px',
          height: '62px',
          background: '#f5f5f5',
          borderRadius: '6px',
          fontFamily: 'Poppins',
          fontWeight: '600',
          fontSize: '18px',
          color: '#717171',
        }}
        containerStyle={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span></span>}
        renderInput={(props) => <input {...props} />}
      />
      <Box
        fontWeight={'500'}
        fontFamily={'Poppins'}
        color='red'
        mx='auto'
        textAlign={'center'}
        mt='.75rem'
      >
        {error}
      </Box>
      <Button
        fontFamily='Poppins'
        fontWeight='600'
        fontSize='16px'
        lineHeight='24px'
        color='#FFFFFF'
        width={{base: '100%', lg: '468px'}}
        height='50px'
        background='#4CAD73'
        borderRadius='6px'
        mt='1.5rem'
        isLoading={validateEmailOtpStatus.isLoading}
        onClick={async () => {
          if (otp.length !== 4 || !Number(otp)) {
            setError('Please enter a valid OTP');
            setTimeout(() => {
              setError('');
            }, 3000);
          } else {
            const res: any = await await validateEmailOtp({
              email: userName,
              otp_code: otp,
              otp_hash: otp_hash_reset,
            });
            console.log('res', res);
            if (res?.data?.data) {
              toast({
                title: 'Email verified successfully',
                description: 'Your email has successfully been verified',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
              });
              router.push('/reset-password');
            } else {
              toast({
                title: 'Verification Failed',
                description:
                  res?.error?.data?.message ||
                  res?.data?.message ||
                  'Something went wrong',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
              });
            }
          }
        }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default EmailResetOtpInputForm;
