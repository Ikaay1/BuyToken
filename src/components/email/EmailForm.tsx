import {Form, Formik} from 'formik';
import {useRouter} from 'next/router';
import React from 'react';
import * as Yup from 'yup';

import MessageIcon from '@/assets/MessageIcon';
import {useAppDispatch} from '@/redux/app/hooks';
import {useSendOTPToEmailMutation} from '@/redux/services/auth.service';
import {setData} from '@/redux/slices/authSlice';
import {Box, Button, Text, useToast} from '@chakra-ui/react';

import AuthInput from '../login/AuthInput';

const EmailForm = () => {
  const router = useRouter();
  const [sendOTPToEmail, sendOTPToEmailStatus] = useSendOTPToEmailMutation();
  const toast = useToast();
  const dispatch = useAppDispatch();
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
        onSubmit={async ({email}) => {
          const response: any = await sendOTPToEmail({
            email,
          });
          if (response?.data?.data) {
            toast({
              title: 'OTP sent to Email',
              description: 'An OTP has been sent to your Email',
              status: 'success',
              duration: 5000,
              isClosable: true,
              position: 'top-right',
            });
            dispatch(
              setData({
                payload: {
                  userName: email,
                  otp_hash_reset: response?.data?.data?.otp_hash,
                },
              }),
            );
            router.push('/emailResetOtp');
          } else {
            toast({
              title: 'Error',
              description:
                response?.error?.data?.message ||
                response?.data?.message ||
                'Something went wrong',
              status: 'error',
              duration: 3000,
              isClosable: true,
              position: 'top-right',
            });
          }
        }}
      >
        {(props) => (
          <Form>
            <AuthInput
              placeholder='Enter Your Email Address'
              type='text'
              icon={MessageIcon}
              value='email'
            />
            <Text
              fontFamily='Poppins'
              fontStyle='normal'
              fontWeight='600'
              fontSize={{base: '12px', lg: '16px'}}
              lineHeight='24px'
              color='#1E1E1F'
              textAlign={'right'}
              mt='.8rem'
              cursor='pointer'
              textDecoration={'underline'}
              onClick={() => router.push('/mobile')}
            >
              Use mobile number instead?
            </Text>

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
              isLoading={sendOTPToEmailStatus.isLoading}
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
