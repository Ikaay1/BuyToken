import {useRouter} from 'next/router';
import React from 'react';

import BackArrow from '@/assets/BackArrow';
import SignupForm from '@/components/signup/SignupForm';
import {Box, Flex, Icon, Text} from '@chakra-ui/react';

const Signup = () => {
  const router = useRouter();
  return (
    <Flex
      h='100vh'
      justifyContent={'center'}
      alignItems={'center'}
      backgroundImage={'url(/assets/login_bg.png)'}
      backgroundRepeat={'no-repeat'}
      overflowY={'auto'}
    >
      <Box
        width='845px'
        background='#FFFFFF'
        boxShadow='0px 0px 25px rgba(0, 0, 0, 0.2)'
        borderRadius='6px'
        p='1.9rem'
      >
        <Icon
          onClick={() => router.back()}
          cursor='pointer'
          as={BackArrow}
          w='30px'
          h='19.3px'
        />
        <Flex flexDirection={'column'} alignItems={'center'} mt='1rem'>
          <Text
            fontFamily='Raleway'
            fontWeight='600'
            fontSize='32px'
            lineHeight='26px'
            textAlign='center'
            color='#1E1E1F'
          >
            SIGN UP
          </Text>
          <Text
            fontFamily='Poppins'
            fontSize='20px'
            lineHeight='30px'
            textAlign='center'
            color='#737373'
            mt='.75rem'
          >
            Welcome, Please Join the BuyToken Community
          </Text>
          <SignupForm />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Signup;
