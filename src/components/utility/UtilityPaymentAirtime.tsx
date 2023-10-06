import {Field, Form, Formik} from 'formik';
import {useRouter} from 'next/router';
import React from 'react';
import * as Yup from 'yup';

import IdCardIcon from '@/assets/IdCardIcon';
import {ElectricityDetailsInterface} from '@/constants/interface';
import {useBuyAirtimeMutation} from '@/redux/services/electricity.service';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';

const UtilityPaymentAirtime = ({
  airtimeDetails,
}: {
  airtimeDetails: ElectricityDetailsInterface;
}) => {
  const toast = useToast();
  const router = useRouter();
  const [buyAirtime, buyAirtimeStatus] = useBuyAirtimeMutation();
  return (
    <Box px={{lg: '2rem'}} mt={{base: '4rem', lg: '1.9rem'}}>
      <Formik
        initialValues={{
          phone: '',
          amount: '',
        }}
        enableReinitialize
        validationSchema={Yup.object({
          phone: Yup.string()
            .required('Phone Number is Required')
            .min(11, 'Must be exactly 11 digits')
            .max(11, 'Must be exactly 11 digits'),
          amount: Yup.number().required('Amount is Required'),
        })}
        onSubmit={async ({phone, amount}) => {
          if (!Number(phone)) {
            toast({
              title: 'Invalid phone number',
              description: 'Please enter a valid phone number',
              status: 'error',
              duration: 3000,
              isClosable: true,
              position: 'top-right',
            });
            return;
          }
          if (airtimeDetails?.merchantId) {
            const res: any = await buyAirtime({
              phoneNumber: phone,
              serviceType: airtimeDetails?.merchantId,
              amount: Number(amount),
            });
            console.log('buyResp', res);
            if (res?.data?.data) {
              toast({
                title: 'Purchase successful',
                description: 'Your purchase has been successful',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
              });
              router.push('/dashboard');
            } else {
              toast({
                title: 'Purchase failed',
                description:
                  res?.error?.data?.message ||
                  res?.data?.message ||
                  "Couldn't make the purchase. Something went wrong",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
              });
            }
          }
        }}
      >
        {(props) => (
          <Form>
            <Field name={'phone'}>
              {({field, form}: any) => (
                <FormControl
                  isInvalid={form.errors['phone'] && form.touched['phone']}
                >
                  <InputGroup
                    border={'none'}
                    outline='none'
                    borderRadius={'6px'}
                    background={'#F5F5F5'}
                  >
                    <Input
                      width={{base: '100%', lg: '480px', mlg: '570px'}}
                      height='50px'
                      border={'none'}
                      outline='none'
                      placeholder='Phone Number'
                      fontFamily='Poppins'
                      color='#717171'
                      focusBorderColor='white'
                      fontSize={{base: '12px', lg: '16px'}}
                      {...field}
                    />
                    <InputRightElement pointerEvents='none' h='100%'>
                      <Icon as={IdCardIcon} />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors['phone']}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name={'amount'}>
              {({field, form}: any) => (
                <FormControl
                  isInvalid={form.errors['amount'] && form.touched['amount']}
                >
                  <Input
                    width={{base: '100%', lg: '480px', mlg: '570px'}}
                    height='50px'
                    border={'none'}
                    outline='none'
                    placeholder='Amount'
                    fontFamily='Poppins'
                    color='#717171'
                    focusBorderColor='white'
                    borderRadius={'6px'}
                    background={'#F5F5F5'}
                    fontSize={{base: '12px', lg: '16px'}}
                    mt={{base: '1.6rem', lg: '2rem'}}
                    {...field}
                  />
                  <FormErrorMessage>{form.errors['amount']}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Flex
              justifyContent={{base: 'center', lg: 'flex-end'}}
              mt={{base: '4.6rem', lg: '6rem'}}
            >
              <Button
                height={{base: '47px', lg: '33px'}}
                background='#417657'
                box-shadow='0px 24.2056px 48.4112px 7.26168px rgba(0, 0, 0, 0.1)'
                borderRadius='5px'
                px='1.5rem'
                fontFamily='Raleway'
                fontWeight='600'
                color='#FFFFFF'
                w={{base: '100%', lg: 'auto'}}
                type='submit'
                isLoading={buyAirtimeStatus.isLoading}
              >
                Pay N980
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default UtilityPaymentAirtime;
