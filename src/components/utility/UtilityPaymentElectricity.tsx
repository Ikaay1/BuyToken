import React, {useState} from 'react';

import PersonIcon from '@/assets/PersonIcon';
import WhiteArrowRight from '@/assets/WhiteArrowRight';
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
} from '@chakra-ui/react';

const UtilityPaymentElectricity = () => {
  return (
    <Box pl={{lg: '2rem'}} mt='1.9rem'>
      <Box pr='2rem'>
        {[
          {name: 'Meter Number:', value: '1234567890'},
          {name: 'Meter Type:', value: 'Prepaid'},
          {name: 'Customer Name:', value: 'Moses Ikechukwu'},
          {
            name: 'Address:',
            value: 'No 10 Akintola road  Ikeja, Lagos',
          },
          {name: 'Amount:', value: 'N20,000'},
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
        >
          Pay N20,000
        </Button>
      </Flex>
    </Box>
  );
};

export default UtilityPaymentElectricity;
