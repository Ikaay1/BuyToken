import {Form, Formik} from 'formik';
import {useRouter} from 'next/router';
import React from 'react';
import * as Yup from 'yup';

import IdCardIcon from '@/assets/IdCardIcon';
import MessageIcon from '@/assets/MessageIcon';
import PersonIcon from '@/assets/PersonIcon';
import SeePasswordIcon from '@/assets/SeePasswordIcon';
import {useAppDispatch, useAppSelector} from '@/redux/app/hooks';
import {useResetPasswordMutation} from '@/redux/services/auth.service';
import {clearData} from '@/redux/slices/authSlice';
import {Box, Button, Text, useToast} from '@chakra-ui/react';

import AuthInput from '../login/AuthInput';

const ResetPasswordForm = () => {
  const router = useRouter();
  const userName = useAppSelector((state) => state?.app?.user?.data?.userName);
  const [resetPassword, resetPasswordStatus] = useResetPasswordMutation();
  const dispatch = useAppDispatch();
  const toast = useToast();
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
            .required('Confirm Password is Required')
            .test('passwords-match', 'Passwords must match', function (value) {
              return this.parent.password === value;
            }),
        })}
        onSubmit={async ({password}) => {
          const res: any = await resetPassword({
            username: userName,
            password,
          });
          if (res?.data?.data) {
            toast({
              title: 'Password reset successful',
              description: 'Your password has successfully been reset',
              status: 'success',
              duration: 8000,
              isClosable: true,
              position: 'top-right',
            });
            dispatch(clearData({payload: {}}));
            router.push('/login');
          } else {
            toast({
              title: 'Verification Failed',
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
              isLoading={resetPasswordStatus.isLoading}
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
