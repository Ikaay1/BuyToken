import {Form, Formik} from 'formik';
import React from 'react';
import * as Yup from 'yup';

import IdCardIcon from '@/assets/IdCardIcon';
import InfoBadge from '@/assets/InfoBadge';
import MessageIcon from '@/assets/MessageIcon';
import PersonIcon from '@/assets/PersonIcon';
import {useAppDispatch, useAppSelector} from '@/redux/app/hooks';
import {useUpdateProfileNameMutation} from '@/redux/services/user.service';
import {setUserProfile} from '@/redux/slices/authSlice';
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
  const [updateProfileName, updateProfileNameStatus] =
    useUpdateProfileNameMutation();
  const dispatch = useAppDispatch();
  return (
    <Box>
      <Formik
        initialValues={{
          name,
          phone: '+' + phone,
          email,
        }}
        enableReinitialize
        validationSchema={Yup.object({
          name: Yup.string().required('Name is Required'),
          phone: Yup.string()
            // .required('Phone Number is Required')
            .min(14, 'Must be exactly 14 digits')
            .max(14, 'Must be exactly 14 digits'),
          email: Yup.string().email().required('Email is Required'),
        })}
        onSubmit={async ({name, phone}) => {
          if (phone && !phone.startsWith('+234')) {
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
          const res: any = await updateProfileName({name});
          console.log('updateProfileName', res);
          if (res?.data?.data) {
            dispatch(
              setUserProfile({
                payload: {
                  data: res?.data?.data,
                },
              }),
            );
            toast({
              title: 'Profile name successfully updated',
              description: 'Your profile name has been successfully updated',
              status: 'success',
              duration: 8000,
              isClosable: true,
              position: 'top-right',
            });
          } else {
            toast({
              title: 'Addition failed',
              description: res?.error?.data?.message || 'Something went wrong',
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
            <UpdateProfileInput
              placeholder='Full Names (Firstname Lastname Othernames)'
              icon={PersonIcon}
              value='name'
            />
            <UpdateProfileInput
              placeholder='Phone Number (should start with +234)'
              icon={IdCardIcon}
              value='phone'
              readOnly={true}
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
                fontSize={{base: '10px', lg: '12px'}}
                lineHeight='18px'
                color='#4CAD73'
              >
                Email and Phone number cannot be updated. Reach out through any
                of our support channels if there is a need to update your email
                or phone number
              </Text>
            </Flex>
            <Flex
              width={{base: '100%', lg: '480px', mlg: '570px'}}
              justifyContent={{base: 'center', lg: 'flex-end'}}
              mt={{base: '2rem', lg: '2.55rem'}}
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
                isDisabled={props.values.name === name}
                isLoading={updateProfileNameStatus.isLoading}
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
