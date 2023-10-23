import {Form, Formik} from 'formik';
import React from 'react';
import * as Yup from 'yup';

import IdCardIcon from '@/assets/IdCardIcon';
import InfoBadge from '@/assets/InfoBadge';
import MessageIcon from '@/assets/MessageIcon';
import PersonIcon from '@/assets/PersonIcon';
import SeePasswordIcon from '@/assets/SeePasswordIcon';
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from '@chakra-ui/react';

import UpdateProfileInput from './UpdateProfileInput';

const ChangePassword = () => {
  const toast = useToast();
  return (
    <Box>
      <Formik
        initialValues={{
          oldPassword: '',
          password: '',
          confirmPassword: '',
        }}
        enableReinitialize
        validationSchema={Yup.object({
          name: Yup.string().min(5).required('Old Password is Required'),
          password: Yup.string().min(5).required('Password is Required'),
          confirmPassword: Yup.string()
            .min(5)
            .required('Confirm Password is Required')
            .test('passwords-match', 'Passwords must match', function (value) {
              return this.parent.password === value;
            }),
        })}
        onSubmit={async ({password, oldPassword}) => {}}
      >
        {(props) => (
          <Form>
            <UpdateProfileInput
              placeholder='Old Password'
              type='password'
              icon={SeePasswordIcon}
              value='name'
            />
            <UpdateProfileInput
              placeholder='New Password'
              type='password'
              icon={SeePasswordIcon}
              value='phone'
            />
            <UpdateProfileInput
              placeholder='New Password Confirmation'
              type='password'
              icon={SeePasswordIcon}
              value='email'
            />
            <Flex
              width={{base: '100%', lg: '480px', mlg: '570px'}}
              justifyContent={{base: 'center', lg: 'flex-end'}}
              mt='2.1rem'
            >
              <Button
                width={{base: '317px', lg: '132px'}}
                height={{base: '47px', lg: '33px'}}
                background='#417657'
                boxShadow='0px 24.2056px 48.4112px 7.26168px rgba(0, 0, 0, 0.1)'
                borderRadius='5px'
                fontFamily='Raleway'
                fontWeight='600'
                fontSize={{base: '16px', lg: '14px'}}
                color='#FFFFFF'
                type='submit'
              >
                Change
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ChangePassword;
