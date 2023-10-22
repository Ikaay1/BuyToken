import {useRouter} from 'next/router';
import React, {useState} from 'react';

import PersonIcon from '@/assets/PersonIcon';
import WhiteArrowRight from '@/assets/WhiteArrowRight';
import {
  CustomerDetailsInterface,
  ElectricityDetailsInterface,
} from '@/constants/interface';
import {useBorrowPowerMutation} from '@/redux/services/electricity.service';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useToast,
} from '@chakra-ui/react';

const UtilityPaymentBorrowElectricity = ({
  electricityDetails,
  customerDetails,
}: {
  electricityDetails: ElectricityDetailsInterface;
  customerDetails: CustomerDetailsInterface;
}) => {
  const [buyPower, buyPowerStatus] = useBorrowPowerMutation();
  const toast = useToast();
  const router = useRouter();
  return (
    <Box pl={{lg: '2rem'}} mt='1.9rem'>
      <Box pr='2rem'>
        {[
          {name: 'Meter Number:', value: customerDetails?.meterNumber},
          {
            name: 'Meter Type:',
            value:
              customerDetails?.meterType && customerDetails?.meterType === '1'
                ? 'Prepaid'
                : 'Postpaid',
          },
          {
            name: 'Customer Name:',
            value: customerDetails?.CustomerName,
          },
          {
            name: 'Address:',
            value: customerDetails?.CustomerAddress,
          },
          {name: 'Amount:', value: `N${customerDetails?.amount}`},
        ].map(({name, value}) => (
          <Flex
            alignItems={'center'}
            key={name}
            mt={name !== 'Meter Number:' ? '1.2rem' : undefined}
          >
            <Text
              fontFamily='Poppins'
              fontWeight='500'
              color='#000000'
              w={{base: '100px', lg: '142px'}}
              mr={{base: '1.5rem', lg: '3.4rem'}}
              fontSize={{base: '11px', lg: '16px'}}
            >
              {name}
            </Text>
            <Text
              fontFamily='Poppins'
              color='#000000'
              fontSize={{base: '11px', lg: '16px'}}
            >
              {value}
            </Text>
          </Flex>
        ))}
      </Box>
      <Flex
        justifyContent={{base: 'center', lg: 'flex-end'}}
        mt={{base: '4.6rem', lg: '6rem'}}
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
          onClick={async () => {
            if (
              electricityDetails?.merchantId &&
              customerDetails?.meterNumber &&
              customerDetails?.meterType &&
              customerDetails?.CustomerName &&
              customerDetails?.amount
            ) {
              const res: any = await buyPower({
                customerId: customerDetails?.meterNumber,
                MerchantFK: electricityDetails?.merchantId,
                accountType: customerDetails?.meterType,
                customerName: customerDetails?.CustomerName,
                amount: customerDetails?.amount,
              });
              console.log('buyResp', res);
              if (res?.data?.data) {
                toast({
                  title: 'Purchase successful',
                  description: 'Your purchase has been successful',
                  status: 'success',
                  duration: 8000,
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
                  duration: 8000,
                  isClosable: true,
                  position: 'top-right',
                });
              }
            }
          }}
          isLoading={buyPowerStatus.isLoading}
        >
          Pay ₦{customerDetails?.amount}
        </Button>
      </Flex>
    </Box>
  );
};

export default UtilityPaymentBorrowElectricity;
