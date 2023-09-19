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

const ResetPasswordForm = () => {
  const router = useRouter();
  return (
    <Box mt='1.2rem' width={{lg: '570px'}}>
      <Formik
        initialValues={{
          password: '',
          confirmPassword: '',
        }}
        enableReinitialize
        validationSchema={Yup.object({
          password: Yup.string().min(5).required('Password is Required'),
          confirmPassword: Yup.string()
            .min(5)
            .required('Confirm Password is Required'),
        })}
        onSubmit={async ({password, confirmPassword}) => {}}
      >
        {(props) => (
          <Form>
            <Box mt='.8rem'>
              <AuthInput
                placeholder='New Password'
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
              mt='1.2rem'
              onClick={() => router.push('/login')}
            >
              Update Password
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ResetPasswordForm;
