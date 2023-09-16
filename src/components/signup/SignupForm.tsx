import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';

import IdCardIcon from '@/assets/IdCardIcon';
import MessageIcon from '@/assets/MessageIcon';
import PersonIcon from '@/assets/PersonIcon';
import SeePasswordIcon from '@/assets/SeePasswordIcon';
import { Box, Button, Text } from '@chakra-ui/react';

import AuthInput from '../login/AuthInput';

const SignupForm = () => {
  const router = useRouter();
  return (
    <Box mt='1.2rem' width={{lg: '570px'}}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          name: '',
          phone: '',
          confirmPassword: '',
        }}
        enableReinitialize
        validationSchema={Yup.object({
          email: Yup.string().email().required('Email is Required'),
          name: Yup.string().required('Name is Required'),
          phone: Yup.string().required('Phone Number is Required'),
          password: Yup.string().min(5).required('Password is Required'),
          confirmPassword: Yup.string()
            .min(5)
            .required('Confirm Password is Required'),
        })}
        onSubmit={async ({email, password, phone, name, confirmPassword}) => {}}
      >
        {(props) => (
          <Form>
            <AuthInput
              placeholder='Name'
              type='text'
              icon={PersonIcon}
              value='name'
            />
            <Box mt='.8rem'>
              <AuthInput
                placeholder='Phone Number'
                type='tel'
                icon={IdCardIcon}
                value='phone'
              />
            </Box>
            <Box mt='.8rem'>
              <AuthInput
                placeholder='Email Address'
                type='email'
                icon={MessageIcon}
                value='email'
              />
            </Box>
            <Box mt='.8rem'>
              <AuthInput
                placeholder='Password'
                type='password'
                icon={SeePasswordIcon}
                value='password'
              />
            </Box>
            <Box mt='.8rem'>
              <AuthInput
                placeholder='Confirm Password'
                type='password'
                icon={SeePasswordIcon}
                value='confirmPassword'
              />
            </Box>
            <Button
              type='submit'
              fontFamily='Poppins'
              fontWeight='600'
              fontSize='16px'
              lineHeight='24px'
              color='#FFFFFF'
              width={{base: '100%', lg: '570px'}}
              height='50px'
              background='#4CAD73'
              borderRadius='6px'
              mt='1.1rem'
              onClick={() => router.push('/otp')}
            >
              Signup
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
      >
        Have an account?{' '}
        <Box
          as='span'
          color='#4CAD73'
          onClick={() => router.push('/login')}
          cursor='pointer'
        >
          {''}Login
        </Box>
      </Text>
    </Box>
  );
};

export default SignupForm;
