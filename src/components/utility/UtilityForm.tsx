import React, {useEffect, useState} from 'react';

import PersonIcon from '@/assets/PersonIcon';
import WhiteArrowRight from '@/assets/WhiteArrowRight';
import {
  CustomerDetailsInterface,
  ElectricityDetailsInterface,
} from '@/constants/interface';
import {useValidateCustomerMutation} from '@/redux/services/electricity.service';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Skeleton,
  Text,
  useToast,
} from '@chakra-ui/react';

const UtilityForm = ({
  setState,
  electricityDetails,
  customerDetails,
  setCustomerDetails,
}: {
  setState: React.Dispatch<React.SetStateAction<string>>;
  electricityDetails: ElectricityDetailsInterface;
  customerDetails: CustomerDetailsInterface;
  setCustomerDetails: React.Dispatch<
    React.SetStateAction<CustomerDetailsInterface>
  >;
}) => {
  const [meterNumber, setMeterNumber] = useState('');
  const [isCheckedPrepaid, setIsCheckedPrepaid] = useState(false);
  const [isCheckedPostPaid, setIsCheckedPostPaid] = useState(false);
  const [validateCustomer, validateCustomerStatus] =
    useValidateCustomerMutation();
  const toast = useToast();

  const [meterError, setMeterError] = useState('');
  const [checkboxError, setCheckboxError] = useState('');
  const [amountError, setAmountError] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const checkCustomer = async () => {
      setCustomerDetails({
        FirstName: '',
        LastName: '',
        CustomerName: '',
        CustomerAddress: '',
        meterNumber: '',
        meterType: '',
        amount: '',
      });
      if (
        (isCheckedPostPaid || isCheckedPrepaid) &&
        meterNumber.length === 11
      ) {
        const res: any = await validateCustomer({
          customerId: meterNumber,
          MerchantFK: electricityDetails?.merchantId,
          accountType: isCheckedPrepaid ? '1' : '2',
        });
        console.log('customerDetails', res);
        if (res?.data?.data?.respCode === '00') {
          setCustomerDetails({
            ...res?.data?.data,
            meterNumber,
            meterType: isCheckedPrepaid ? '1' : '2',
          });
        } else {
          toast({
            title: 'Verification failed',
            description:
              res?.error?.data?.message ||
              "Couldn't verify customer. Something went wrong",
            status: 'error',
            duration: 8000,
            isClosable: true,
            position: 'top-right',
          });
        }
      }
    };
    checkCustomer();
  }, [
    isCheckedPrepaid,
    isCheckedPostPaid,
    meterNumber,
    electricityDetails?.merchantId,
  ]);

  useEffect(() => {
    if (meterNumber) {
      if (meterNumber.length !== 11) {
        setMeterError('Meter Number must be 11 digits');
      } else {
        setMeterError('');
      }
    } else {
      setMeterError('');
    }
  }, [meterNumber]);

  console.log('isPrepaidChecked', isCheckedPrepaid);

  return (
    <Box px={{lg: '2rem'}} mt='1.9rem'>
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
          placeholder='Meter Number'
          fontFamily='Poppins'
          color='#717171'
          focusBorderColor='white'
          fontSize={{base: '12px', lg: '16px'}}
          required={true}
          maxLength={11}
          value={meterNumber}
          onChange={(e) => setMeterNumber(e.target.value)}
        />
        <InputRightElement pointerEvents='none' h='100%'>
          <Icon as={PersonIcon} />
        </InputRightElement>
      </InputGroup>
      <Text
        color='red'
        fontSize={{base: '12px', lg: '15px'}}
        fontFamily={'Poppins'}
      >
        {meterError}
      </Text>
      <Flex mt={{base: '1rem', lg: '1.4rem'}}>
        {['Prepaid', 'Postpaid'].map((each) => (
          <Flex alignItems={'center'} key={each} mr='3.5rem'>
            <Checkbox
              width='16px'
              height='16px'
              background='#F5F5F5'
              borderRadius='2px'
              mr='.5rem'
              isChecked={
                each === 'Prepaid' ? isCheckedPrepaid : isCheckedPostPaid
              }
              onChange={
                each === 'Prepaid'
                  ? (e) => {
                      if (e.target.checked === true) {
                        setIsCheckedPostPaid(false);
                      }
                      setIsCheckedPrepaid(e.target.checked);
                      setCheckboxError('');
                    }
                  : (e) => {
                      if (e.target.checked === true) {
                        setIsCheckedPrepaid(false);
                      }
                      setIsCheckedPostPaid(e.target.checked);
                      setCheckboxError('');
                    }
              }
            />
            <Text fontFamily='Poppins' color='#717171'>
              {each}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Text
        color='red'
        fontSize={{base: '12px', lg: '15px'}}
        fontFamily={'Poppins'}
      >
        {checkboxError}
      </Text>
      {validateCustomerStatus.isLoading ? (
        <Box mt='1.8rem'>
          <Skeleton height='20px' w={{base: '50%', lg: '200px'}}></Skeleton>
          <Box mt='1rem'>
            <Skeleton height='20px' w={{base: '75%', lg: '400px'}}></Skeleton>
          </Box>
        </Box>
      ) : (
        <Box mt='1.8rem'>
          <Text
            fontSize={{base: '14px', lg: '16px'}}
            fontFamily='Poppins'
            fontWeight='500'
            color='#000000'
          >
            {customerDetails?.CustomerName}
          </Text>
          <Text
            fontSize={{base: '14px', lg: '16px'}}
            fontFamily='Poppins'
            color='#000000'
            maxW={{base: '100%', lg: '480px', mlg: '570px'}}
          >
            {customerDetails?.CustomerAddress}
          </Text>
        </Box>
      )}
      <Input
        borderRadius={'6px'}
        background={'#F5F5F5'}
        width={{base: '100%', lg: '480px', mlg: '570px'}}
        height='50px'
        border={'none'}
        outline='none'
        placeholder='Amount'
        fontFamily='Poppins'
        color='#717171'
        focusBorderColor='white'
        mt={{base: '1rem', lg: '2rem'}}
        fontSize={{base: '12px', lg: '16px'}}
        required={true}
        disabled={!customerDetails?.CustomerName}
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
          setAmountError('');
        }}
        type='number'
      />
      <Text
        color='red'
        fontSize={{base: '12px', lg: '15px'}}
        fontFamily={'Poppins'}
      >
        {amountError}
      </Text>
      <Flex
        justifyContent={{base: 'center', lg: 'flex-end'}}
        mt={{base: '3.3rem', lg: '3rem'}}
      >
        <Button
          display={'flex'}
          alignItems={'center'}
          justifyContent={{base: 'center', lg: 'space-between'}}
          width={{base: '90%', lg: '132px'}}
          height={{base: '47px', lg: '33px'}}
          background='#417657'
          boxShadow='0px 24.2056px 48.4112px 7.26168px rgba(0, 0, 0, 0.1)'
          borderRadius='5px'
          fontFamily='Raleway'
          fontWeight='500'
          fontSize={{lg: '13px'}}
          color='#FFFFFF'
          pl={{lg: '3rem'}}
          isLoading={validateCustomerStatus.isLoading}
          onClick={() => {
            if (!meterNumber) {
              setMeterError('Meter Number is required');
              return;
            }
            if (meterNumber.length !== 11) {
              setMeterError('Meter Number must be 11 digits');
              return;
            }
            if (!isCheckedPrepaid && !isCheckedPostPaid) {
              setCheckboxError('Please select either Prepaid or Postpaid');
              return;
            }
            if (!customerDetails?.CustomerName) {
              toast({
                title: 'Wrong Meter Details',
                description: 'Please give a correct Meter Details',
                status: 'error',
                duration: 8000,
                isClosable: true,
                position: 'top-right',
              });
              return;
            }
            if (!amount) {
              setAmountError('Amount is required');
              return;
            }
            setCustomerDetails((prevCustomerDetails) => ({
              ...prevCustomerDetails,
              amount,
            }));
            setState('payment');
          }}
        >
          Next
          <Icon
            display={{base: 'none', lg: 'block'}}
            as={WhiteArrowRight}
            w='13px'
            h='13px'
          />
        </Button>
      </Flex>
    </Box>
  );
};

export default UtilityForm;
