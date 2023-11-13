import {Form, Formik} from 'formik';
import {useRouter} from 'next/router';
import React from 'react';
import * as Yup from 'yup';

import MessageIcon from '@/assets/MessageIcon';
import {useAppDispatch} from '@/redux/app/hooks';
import {useSendOTPToMobileMutation} from '@/redux/services/auth.service';
import {setData} from '@/redux/slices/authSlice';
import {Box, Button, Text, useToast} from '@chakra-ui/react';

import AuthInput from '../login/AuthInput';

const MobileForm = () => {
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
          mobileNumber: Yup.string()
            .required('Phone Number is Required')
            .min(14, 'Must be exactly 14 digits')
            .max(14, 'Must be exactly 14 digits'),
        })}
        onSubmit={async ({mobileNumber}) => {
          if (!mobileNumber.startsWith('+234')) {
            toast({
              title: 'Invalid phone number',
              description: 'Phone number must start with +234',
              status: 'error',
              duration: 8000,
              isClosable: true,
              position: 'top-right',
            });
            return;
          }
          const response: any = await sendOTPToMobile({
            mobileNumber: mobileNumber.slice(1),
          });
          if (response?.data?.data) {
            toast({
              title: 'OTP sent to Phone Number',
              description: 'An OTP has been sent to your Mobile Number',
              status: 'success',
              duration: 8000,
              isClosable: true,
              position: 'top-right',
            });
            dispatch(
              setData({
                payload: {
                  userName: mobileNumber.slice(1),
                  mobile_hash_reset: response?.data?.data?.otp_hash,
                },
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
              placeholder='Enter Your Mobile Number (+2348046578833)'
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
              onClick={() => router.push('/email')}
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

export default MobileForm;
