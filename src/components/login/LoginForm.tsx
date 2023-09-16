import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';

import MessageIcon from '@/assets/MessageIcon';
import SeePasswordIcon from '@/assets/SeePasswordIcon';
import {
	Box,
	Button,
	Checkbox,
	Divider,
	Flex,
	Link,
	Text,
} from '@chakra-ui/react';

import AuthInput from './AuthInput';

const LoginForm = () => {
  const router = useRouter();
  return (
    <Box mt='1.2rem' width='570px'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        enableReinitialize
        validationSchema={Yup.object({
          email: Yup.string().required('Email or Phone Number is Required'),
          password: Yup.string().min(5).required('Password is Required'),
        })}
        onSubmit={async ({email, password}) => {}}
      >
        {(props) => (
          <Form>
            <AuthInput
              placeholder='Email or Phone Number'
              type='text'
              icon={MessageIcon}
              value='email'
            />
            <Box mt='.8rem'>
              <AuthInput
                placeholder='Password*'
                type='password'
                icon={SeePasswordIcon}
                h='11.47px'
                value='password'
              />
            </Box>
            <Flex alignItems={'center'} mt='.8rem'>
              <Checkbox
                mr='.6rem'
                width='14px'
                height='14px'
                borderColor='#737373'
              />
              <Text>Remember me</Text>
            </Flex>
            <Button
              type='submit'
              fontFamily='Poppins'
              fontWeight='600'
              fontSize='16px'
              lineHeight='24px'
              color='#FFFFFF'
              width='570px'
              height='50px'
              background='#4CAD73'
              borderRadius='6px'
              mt='1.1rem'
              onClick={() => router.push('/signup')}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <Text
        fontFamily='Poppins'
        fontStyle='normal'
        fontWeight='600'
        fontSize='16px'
        lineHeight='24px'
        color='#1E1E1F'
        textAlign={'center'}
        mt='.8rem'
        onClick={() => router.push('/email')}
      >
        Forgot Password?
      </Text>
      <Flex justifyContent={'space-between'} alignItems={'flex-end'} mt='.2rem'>
        <Divider
          w='47.5%'
          borderWidth={'1.3px'}
          borderColor={'#CCCCCC'}
        ></Divider>
        <Text
          fontFamily='Poppins'
          fontWeight='600'
          fontSize='14px'
          lineHeight='21px'
          color='#737373'
          alignSelf={'center'}
        >
          Or
        </Text>
        <Divider
          w='47.5%'
          borderWidth={'1.3px'}
          borderColor={'#CCCCCC'}
        ></Divider>
      </Flex>
      <Button
        width='571px'
        height='50px'
        background={'rgba(76,173,115,0.1)'}
        borderRadius='6px'
        fontFamily="'Poppins'"
        fontWeight='600'
        fontSize='14px'
        color={'rgb(76,173,115)'}
        onClick={() => router.push('/signup')}
        mt='1.3rem'
      >
        Sign up for free
      </Button>
    </Box>
  );
};

export default LoginForm;
