import { useRouter } from 'next/router';
import React, { useState } from 'react';
import OTPInput from 'react-otp-input';

import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import {
	useLoginMutation,
	useValidateMobileOtpMutation,
} from '@/redux/services/auth.service';
import { clearData, setCredentials } from '@/redux/slices/authSlice';
import { Box, Button, useToast } from '@chakra-ui/react';

const MobileOtpInputForm = () => {
  const [otp, setOtp] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');
  const mobileNumber = useAppSelector(
    (state) => state?.app?.user?.data?.mobileNumber,
  );
  const password = useAppSelector((state) => state?.app?.user?.data?.password);
  const [validateMobileOtp, validateMobileOtpStatus] =
    useValidateMobileOtpMutation();
  const toast = useToast();
  const dispatch = useAppDispatch();
  const [login, loginStatus] = useLoginMutation();

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
        isLoading={validateMobileOtpStatus.isLoading || loginStatus.isLoading}
        onClick={async () => {
          if (otp.length !== 4 || !Number(otp)) {
            setError('Please enter a valid OTP');
            setTimeout(() => {
              setError('');
            }, 3000);
          } else {
            const res: any = await validateMobileOtp({
              mobileNumber,
              otp_code: otp,
            });
            console.log('resSignUp', res);
            if (res?.data?.data) {
              toast({
                title: 'Phone Number verified successfully',
                description: 'Your phone number has successfully been verified',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
              });
              const res: any = await login({username: mobileNumber, password});
              console.log('resLogin', res);
              if (res?.data?.data && !res?.data?.message) {
                dispatch(
                  setCredentials({
                    payload: {
                      token: res?.data?.data?.access_token,
                      data: res?.data?.data?.user,
                    },
                  }),
                );
                // toast({
                //   title: 'Sign up Successful',
                //   description: 'You have successfully signed up',
                //   status: 'success',
                //   duration: 5000,
                //   isClosable: true,
                //   position: 'top-right',
                // });
                dispatch(clearData({payload: {}}));
                router.push('/dashboard');
              } else {
                toast({
                  title: 'Login failed',
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

export default MobileOtpInputForm;
