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

import AuthInput from '../login/AuthInput';

const EmailForm = () => {
  const router = useRouter();
  return (
    <Box mt='1.2rem' width={{lg: '570px'}}>
      <Formik
        initialValues={{
          email: '',
        }}
        enableReinitialize
        validationSchema={Yup.object({
          email: Yup.string().email().required('Email is Required'),
        })}
        onSubmit={async ({email}) => {}}
      >
        {(props) => (
          <Form>
            <AuthInput
              placeholder='Enter Your Email Address'
              type='text'
              icon={MessageIcon}
              value='email'
            />

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
              mt='1.25rem'
              onClick={() => router.push('/reset-password')}
            >
              Continue
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default EmailForm;
