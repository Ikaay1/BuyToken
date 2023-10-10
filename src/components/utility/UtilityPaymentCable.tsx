import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';

import PersonIcon from '@/assets/PersonIcon';
import {ElectricityDetailsInterface} from '@/constants/interface';
import {
  useBuyCableMutation,
  useCablePriceListMutation,
  useValidateCableCustomerMutation,
} from '@/redux/services/electricity.service';
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Skeleton,
  Text,
  useToast,
} from '@chakra-ui/react';

const UtilityPaymentCable = ({
  cableDetails,
}: {
  cableDetails: ElectricityDetailsInterface;
}) => {
  const [validateCustomer, validateCustomerStatus] =
    useValidateCableCustomerMutation();
  const [smartCardNumber, setSmartCardNumber] = useState('');
  const [customerDetails, setCustomerDetails] = useState({
    CustomerName: '',
    CustomerAddress: '',
  });
  const [smartCardError, setSmartCardError] = useState('');
  const [priceList, priceListStatus] = useCablePriceListMutation();
  const [cableList, setCableList] = useState([]);
  const [productCode, setProductCode] = useState('');
  const [productCodeError, setProductCodeError] = useState('');
  const [buyCable, buyCableStatus] = useBuyCableMutation();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    const getPlans = async () => {
      const response: any = await priceList({
        beneficiary: '000',
        MerchantFk: cableDetails?.merchantId,
      });
      if (response?.data?.data?.plans) {
        setCableList(response?.data?.data?.plans);
      } else {
        toast({
          title: 'Error',
          description:
            response?.error?.data?.message ||
            "Couldn't fetch price list. Something went wrong",
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
    };
    getPlans();
  }, [cableDetails?.merchantId]);

  useEffect(() => {
    if (smartCardNumber) {
      if (smartCardNumber.length < 8) {
        setSmartCardError('SmartCard Number must be greater than 8 digits');
      } else {
        setSmartCardError('');
      }
    } else {
      setSmartCardError('');
    }
  }, [smartCardNumber]);

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
          placeholder='Smartcard Number'
          fontFamily='Poppins'
          color='#717171'
          focusBorderColor='white'
          fontSize={{base: '12px', lg: '16px'}}
          minLength={8}
          value={smartCardNumber}
          onChange={(e) => {
            setSmartCardNumber(e.target.value);
            setCustomerDetails({
              CustomerName: '',
              CustomerAddress: '',
            });
          }}
          onBlur={async () => {
            if (smartCardNumber.length > 7 && cableDetails?.merchantId) {
              const res: any = await validateCustomer({
                beneficiary: smartCardNumber,
                MerchantFK: cableDetails?.merchantId,
              });
              console.log('customerDetails', res);
              if (res?.data?.CustomerName) {
                setCustomerDetails(res?.data);
              } else {
                toast({
                  title: 'Verification failed',
                  description:
                    res?.error?.data?.message || "Couldn't verify customer",
                  status: 'error',
                  duration: 3000,
                  isClosable: true,
                  position: 'top-right',
                });
              }
            }
          }}
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
        {smartCardError}
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
            fontSize={{base: '13px', lg: '16px'}}
            fontFamily='Poppins'
            fontWeight='500'
            color='#000000'
          >
            {customerDetails?.CustomerName}
          </Text>
          <Text
            fontSize={{base: '13px', lg: '16px'}}
            fontFamily='Poppins'
            color='#000000'
          >
            {customerDetails?.CustomerAddress}
          </Text>
        </Box>
      )}
      <Select
        width={{base: '100%', lg: '480px', mlg: '570px'}}
        height='50px'
        border={'none'}
        outline='none'
        placeholder='Select Bouquet'
        fontFamily='Poppins'
        color='#717171'
        focusBorderColor='white'
        borderRadius={'6px'}
        background={'#F5F5F5'}
        fontSize={{base: '12px', lg: '16px'}}
        mt={{base: '1.6rem', lg: '3rem'}}
        value={productCode}
        onChange={(e) => {
          setProductCode(e.target.value);
          setProductCodeError('');
        }}
      >
        {cableList?.map(
          (each: {
            amount: string;
            name: string;
            product_code: string;
            service: string;
          }) => (
            <option
              key={each?.product_code}
              value={
                each?.product_code + '$' + each?.service + '$' + each?.amount
              }
            >
              {each?.name}
            </option>
          ),
        )}
      </Select>
      <Text
        color='red'
        fontSize={{base: '12px', lg: '15px'}}
        fontFamily={'Poppins'}
      >
        {productCodeError}
      </Text>
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
        value={productCode?.split('$')[2]}
        readOnly={true}
      />
      <Flex
        justifyContent={{base: 'center', lg: 'flex-end'}}
        mt={{base: '2.3rem', lg: '1.4rem'}}
      >
        <Button
          height={{base: '47px', lg: '33px'}}
          background='#417657'
          boxShadow='0px 24.2056px 48.4112px 7.26168px rgba(0, 0, 0, 0.1)'
          borderRadius='5px'
          px='1.2rem'
          fontFamily='Raleway'
          fontWeight='600'
          color='#FFFFFF'
          w={{base: '100%', lg: 'auto'}}
          isLoading={
            validateCustomerStatus.isLoading ||
            priceListStatus.isLoading ||
            buyCableStatus.isLoading
          }
          onClick={async () => {
            if (!smartCardNumber) {
              setSmartCardError('SmartCard Number is required');
              return;
            }
            if (smartCardNumber.length < 8) {
              setSmartCardError(
                'SmartCard Number must be greater than 8 digits',
              );
              return;
            }
            if (!customerDetails?.CustomerName) {
              toast({
                title: 'Wrong Meter Details',
                description: 'Please give a correct Meter Details',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
              });
              return;
            }
            if (!productCode) {
              setProductCodeError('Please select a Data Bundle');
              return;
            }
            if (cableDetails?.merchantId && productCode?.split('$')[2]) {
              const res: any = await buyCable({
                beneficiary: smartCardNumber,
                MerchantFK: cableDetails?.merchantId,
                Bouquet: productCode?.split('$')[1],
                productCode: productCode?.split('$')[0],
                customerPhone: '000',
                Amount: Number(productCode?.split('$')[2]),
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
          Pay{' '}
          {productCode?.split('$')[2] ? 'N' + productCode?.split('$')[2] : ''}
        </Button>
      </Flex>
    </Box>
  );
};

export default UtilityPaymentCable;
