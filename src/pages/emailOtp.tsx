import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';

import BackArrow from '@/assets/BackArrow';
import EmailOtpInputForm from '@/components/otp/EmailOtpInputForm';
import AuthRoute from '@/layouts/AuthRoute';
import {useAppSelector} from '@/redux/app/hooks';
import {Box, Flex, Icon, Image, Text} from '@chakra-ui/react';

const Otp = () => {
  const router = useRouter();
  const userEmail = useAppSelector((state) => state?.app?.user?.data?.email);

  const [email, setEmail] = useState();

  useEffect(() => {
    if (!userEmail) {
      router.push('/signup');
    }
    setEmail(userEmail);
  }, []);

  return (
    <AuthRoute>
      <Box bg='white'>
        <Flex
          justifyContent={'center'}
          backgroundImage={'url(/assets/login_bg.png)'}
          backgroundRepeat={'no-repeat'}
          pt='10rem'
          pb='6.5rem'
          px={{base: '.8rem', lg: 0}}
          minH='880px'
          maxW='1445px'
          mx='auto'
        >
          <Box
            width={{base: '100%', lg: '845px'}}
            background='#FFFFFF'
            boxShadow='0px 0px 25px rgba(0, 0, 0, 0.2)'
            borderRadius='6px'
            p={{base: '1.4rem', lg: '1.9rem'}}
            position={'relative'}
            h='100%'
          >
            <Flex
              w='91px'
              h='91px'
              bg='white'
              justifyContent={'center'}
              alignItems={'center'}
              position='absolute'
              top={{base: '-19%', lg: '-14.5%'}}
              left='50%'
              transform={'translateX(-50%)'}
              borderRadius={'50%'}
              // display={{base: 'flex', lg: 'none'}}
            >
              <Image src='/assets/bt_logo.png' alt='BT Logo' />
            </Flex>
            <Icon
              onClick={() => router.back()}
              cursor='pointer'
              as={BackArrow}
              w='30px'
              h='19.3px'
            />
            <Box
              display={{lg: 'flex'}}
              flexDirection={'column'}
              alignItems={'center'}
              mt='1rem'
            >
              <Text
                fontFamily='Raleway'
                fontWeight='600'
                fontSize={{base: '20px', lg: '32px'}}
                lineHeight={{lg: '26px'}}
                textAlign='center'
                color='#1E1E1F'
              >
                OTP Verification
              </Text>
              <Text
                fontFamily='Poppins'
                fontSize={{base: '12px', lg: '20px'}}
                lineHeight={{lg: '30px'}}
                textAlign='center'
                color='#737373'
                mt={{base: '.35rem', lg: '.75rem'}}
              >
                Enter the OTP sent to {email}
              </Text>
              <EmailOtpInputForm />
            </Box>
          </Box>
        </Flex>
      </Box>
    </AuthRoute>
  );
};

export default Otp;
