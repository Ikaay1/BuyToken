import { useRouter } from 'next/router';
import React from 'react';

import BackArrow from '@/assets/BackArrow';
import LoginForm from '@/components/login/LoginForm';
import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';

const Login = () => {
  const router = useRouter();
  return (
    <Flex
      justifyContent={'center'}
      backgroundImage={'url(/assets/login_bg.png)'}
      backgroundRepeat={'no-repeat'}
      pt='10rem'
      pb='6.5rem'
      px={{base: '.8rem', lg: 0}}
    >
      <Box
        width={{base: '100%', lg: '845px'}}
        background='#FFFFFF'
        boxShadow='0px 0px 25px rgba(0, 0, 0, 0.2)'
        borderRadius='6px'
        p={{base: '1.4rem', lg: '1.9rem'}}
        position={'relative'}
      >
        <Image
          position='absolute'
          top='-10%'
          left='50%'
          transform={'translateX(-50%)'}
          src='/assets/bt_logo.png'
          alt='BT Logo'
        />
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
            fontSize='32px'
            lineHeight='26px'
            textAlign='center'
            color='#1E1E1F'
          >
            Welcome to BuyToken
          </Text>
          <Text
            fontFamily='Poppins'
            fontSize='20px'
            lineHeight='30px'
            textAlign='center'
            color='#737373'
            mt='.75rem'
          >
            Login to your Account
          </Text>
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
