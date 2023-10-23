import {Form, Formik} from 'formik';
import React from 'react';
import * as Yup from 'yup';

import IdCardIcon from '@/assets/IdCardIcon';
import InfoBadge from '@/assets/InfoBadge';
import MessageIcon from '@/assets/MessageIcon';
import PersonIcon from '@/assets/PersonIcon';
import {useAppSelector} from '@/redux/app/hooks';
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

const UpdateProfile = () => {
  const name = useAppSelector((state) => state?.app?.user?.userProfile?.name);
  const email = useAppSelector((state) => state?.app?.user?.userProfile?.email);
  const phone = useAppSelector(
    (state) => state?.app?.user?.userProfile?.mobileNumber,
  );
  const toast = useToast();
  return (
    <Box>
      <Formik
        initialValues={{
          name,
          phone,
          email,
        }}
        enableReinitialize
        validationSchema={Yup.object({
          name: Yup.string().required('Name is Required'),
          phone: Yup.string()
            .required('Phone Number is Required')
            .min(14, 'Must be exactly 14 digits')
            .max(14, 'Must be exactly 14 digits'),
          email: Yup.string().email().required('Email is Required'),
        })}
        onSubmit={async ({name, phone}) => {
          if (!phone.startsWith('+234')) {
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
        }}
      >
        {(props) => (
          <Form>
            <UpdateProfileInput
              placeholder='Full Names (Firstname Lastname Othernames)'
              icon={PersonIcon}
              value='name'
            />
            <UpdateProfileInput
              placeholder='Phone Number (should start with +234)'
              icon={IdCardIcon}
              value='phone'
            />
            <UpdateProfileInput
              placeholder='Email'
              type='email'
              icon={MessageIcon}
              value='email'
              readOnly={true}
            />
            <Flex width={{base: '100%', lg: '480px', mlg: '570px'}} mt='.27rem'>
              <Icon as={InfoBadge} mr='.44rem' />
              <Text
                fontFamily='Poppins'
                fontSize='12px'
                lineHeight='18px'
                color='#4CAD73'
              >
                Email cannot be updated. Reach out through any of our support
                channels if there is a need to update your email
              </Text>
            </Flex>
            <Flex
              width={{base: '100%', lg: '480px', mlg: '570px'}}
              justifyContent={'flex-end'}
              mt='2.55rem'
            >
              <Button
                width='132px'
                height='33px'
                background='#417657'
                boxShadow='0px 24.2056px 48.4112px 7.26168px rgba(0, 0, 0, 0.1)'
                borderRadius='5px'
                fontFamily='Raleway'
                fontWeight='600'
                fontSize='14px'
                color='#FFFFFF'
                type='submit'
              >
                Update
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default UpdateProfile;
