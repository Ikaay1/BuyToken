import {Form, Formik} from 'formik';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import * as Yup from 'yup';

import MessageIcon from '@/assets/MessageIcon';
import SeePasswordIcon from '@/assets/SeePasswordIcon';
import {useAppDispatch} from '@/redux/app/hooks';
import {
  useLoginMutation,
  useSendOTPToEmailMutation,
  useSendOTPToMobileMutation,
} from '@/redux/services/auth.service';
import {setCredentials, setData} from '@/redux/slices/authSlice';
import {Box, Button, Checkbox, Flex, Text, useToast} from '@chakra-ui/react';

import AuthInput from './AuthInput';
import Social from './Social';

const LoginForm = () => {
  const router = useRouter();
  const [login, loginStatus] = useLoginMutation();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [sendOTPToEmail, sendOTPToEmailStatus] = useSendOTPToEmailMutation();
  const [sendOTPToMobile, sendOTPToMobileStatus] = useSendOTPToMobileMutation();
  return (
    <Box mt='1.2rem' width={{lg: '570px'}}>
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
        onSubmit={async ({email, password}) => {
          if (!email.includes('@') && !email.startsWith('234')) {
            toast({
              title: 'Invalid phone number',
              description: 'Phone number must start with 234',
              status: 'error',
              duration: 8000,
              isClosable: true,
              position: 'top-right',
            });
            return;
          }
          const res: any = await login({username: email, password});
          console.log('resLogin', res);
          if (res?.data?.data?.access_token) {
            dispatch(
              setCredentials({
                payload: {
                  token: res?.data?.data?.access_token,
                  data: res?.data?.data?.user,
                },
              }),
            );
            // toast({
            //   title: 'Login Successful',
            //   description: 'You have successfully logged in',
            //   status: 'success',
            //   duration: 8000,
            //   isClosable: true,
            //   position: 'top-right',
            // });
            router.push('/dashboard');
          } else {
            if (res?.data?.data) {
              if (!res?.data?.data?.emailVerified) {
                const response: any = await sendOTPToEmail({
                  email: res?.data?.data?.email,
                });
                console.log('resSendOtpEmail', response);
                if (response?.data?.data) {
                  dispatch(
                    setData({
                      payload: {
                        email: res?.data?.data?.email,
                        mobileNumber: res?.data?.data?.mobileNumber,
                        password,
                        otp_hash: response?.data?.data.otp_hash,
                      },
                    }),
                  );
                  toast({
                    title: 'OTP sent to Email',
                    description:
                      'Your email has not been verified. An OTP has been sent to your Email for verification',
                    status: 'success',
                    duration: 8000,
                    isClosable: true,
                    position: 'top-right',
                  });
                  router.push('/emailOtp');
                } else {
                  toast({
                    title: 'Error',
                    description:
                      response?.error?.data?.message ||
                      response?.data?.message ||
                      'Something went wrong',
                    status: 'error',
                    duration: 8000,
                    isClosable: true,
                    position: 'top-right',
                  });
                }
                return;
              }
              if (!res?.data?.data?.mobileVerified) {
                const response: any = await sendOTPToMobile({
                  mobileNumber: res?.data?.data?.mobileNumber,
                });
                if (response?.data?.data) {
                  dispatch(
                    setData({
                      payload: {
                        email: res?.data?.data?.email,
                        mobileNumber: res?.data?.data?.mobileNumber,
                        password,
                      },
                    }),
                  );
                  toast({
                    title: 'OTP sent to Phone Number',
                    description:
                      'Your Mobile Number has not been verified. An OTP has been sent to your Mobile Number for verification',
                    status: 'success',
                    duration: 8000,
                    isClosable: true,
                    position: 'top-right',
                  });
                  router.push('/mobileOtp');
                } else {
                  toast({
                    title: 'Error',
                    description:
                      response?.error?.data?.message ||
                      response?.data?.message ||
                      'Something went wrong',
                    status: 'error',
                    duration: 8000,
                    isClosable: true,
                    position: 'top-right',
                  });
                }
                return;
              }
            }
            toast({
              title: 'Login failed',
              description:
                res?.error?.data?.message ||
                res?.data?.message ||
                'Something went wrong',
              status: 'error',
              duration: 8000,
              isClosable: true,
              position: 'top-right',
            });
          }
        }}
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
              <Text
                fontFamily='Poppins'
                fontSize={{base: '12px', lg: '16px'}}
                lineHeight='24px'
                color='#1E1E1F'
              >
                Remember me
              </Text>
            </Flex>
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
              isLoading={loginStatus.isLoading || loading}
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
        fontSize={{base: '12px', lg: '16px'}}
        lineHeight='24px'
        color='#1E1E1F'
        textAlign={'center'}
        mt='.8rem'
        cursor='pointer'
        onClick={() => router.push('/email')}
      >
        Forgot Password?
      </Text>
      <Social setLoading={setLoading} />
      <Text
        fontFamily='Poppins'
        fontStyle='normal'
        fontSize={{base: '12px', lg: '16px'}}
        lineHeight='24px'
        color='#1E1E1F'
        textAlign={'center'}
        mt='1.3rem'
        cursor='pointer'
        onClick={() => router.push('/email')}
      >
        Don&apos;t have an account?
      </Text>
      <Button
        width={{base: '100%', lg: '571px'}}
        height='50px'
        background={'rgba(76,173,115,0.1)'}
        borderRadius='6px'
        fontFamily='Poppins'
        fontWeight='600'
        fontSize='14px'
        color={'rgb(76,173,115)'}
        onClick={() => router.push('/signup')}
        mt='.8rem'
      >
        Sign up for free
      </Button>
    </Box>
  );
};

export default LoginForm;
