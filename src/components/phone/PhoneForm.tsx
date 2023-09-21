import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';

import MessageIcon from '@/assets/MessageIcon';
import SeePasswordIcon from '@/assets/SeePasswordIcon';
import { useAppDispatch } from '@/redux/app/hooks';
import { useSendOTPToMobileMutation } from '@/redux/services/auth.service';
import { setData } from '@/redux/slices/authSlice';
import {
	Box,
	Button,
	Checkbox,
	Divider,
	Flex,
	Link,
	Text,
	useToast,
} from '@chakra-ui/react';

import AuthInput from '../login/AuthInput';

const PhoneForm = () => {
  const router = useRouter();
  const [sendOTPToMobile, sendOTPToMobileStatus] = useSendOTPToMobileMutation();
  const toast = useToast();
  const dispatch = useAppDispatch();
  return (
    <Box mt='1.2rem' width={{lg: '570px'}}>
      <Formik
        initialValues={{
          mobileNumber: '',
        }}
        enableReinitialize
        validationSchema={Yup.object({
          mobileNumber: Yup.string().required('Mobile Number is Required'),
        })}
        onSubmit={async ({mobileNumber}) => {
          const response: any = await sendOTPToMobile({
            mobileNumber,
          });
          if (response?.data?.data) {
            toast({
              title: 'OTP sent to Phone Number',
              description: 'An OTP has been sent to your Mobile Number',
              status: 'success',
              duration: 5000,
              isClosable: true,
              position: 'top-right',
            });
            dispatch(
              setData({
                payload: {userName: mobileNumber},
              }),
            );
            router.push('/mobileResetOtp');
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
              placeholder='Enter Your Mobile Number'
              type='text'
              icon={MessageIcon}
              value='mobileNumber'
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
              onClick={() => router.push('/phone')}
            >
              Use email instead?
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
              isLoading={sendOTPToMobileStatus.isLoading}
            >
              Continue
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PhoneForm;
