import { useRouter } from 'next/router';
import React from 'react';

import BackArrow from '@/assets/BackArrow';
import MobileForm from '@/components/mobile/MobileForm';
import AuthRoute from '@/layouts/AuthRoute';
import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';

const Otp = () => {
  const router = useRouter();
  return (
    <AuthRoute>
      <Flex
        justifyContent={'center'}
        backgroundImage={'url(/assets/login_bg.png)'}
        backgroundRepeat={'no-repeat'}
        pt='10rem'
        pb='6.5rem'
        px={{base: '.8rem', lg: 0}}
        minH={'880px'}
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
            top='-19%'
            left='50%'
            transform={'translateX(-50%)'}
            borderRadius={'50%'}
            display={{base: 'flex', lg: 'none'}}
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
              Enter Your Phone Number
            </Text>
            <Text
              fontFamily='Poppins'
              fontSize={{base: '12px', lg: '20px'}}
              lineHeight={{lg: '30px'}}
              textAlign='center'
              color='#737373'
              mt={{base: '.35rem', lg: '.75rem'}}
            >
              We’ll send you an OTP to reset your password.
            </Text>
            <MobileForm />
          </Box>
        </Box>
      </Flex>
    </AuthRoute>
  );
};

export default Otp;
