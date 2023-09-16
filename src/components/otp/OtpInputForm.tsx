import { useRouter } from 'next/router';
import React, { useState } from 'react';
import OTPInput from 'react-otp-input';

import { Box, Button } from '@chakra-ui/react';

const OtpInputForm = () => {
  const [otp, setOtp] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');

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
        onClick={() => {
          if (otp.length !== 4 || !Number(otp)) {
            setError('Please enter a valid OTP');
            setTimeout(() => {
              setError('');
            }, 3000);
          } else {
            router.push('/home');
          }
        }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default OtpInputForm;
