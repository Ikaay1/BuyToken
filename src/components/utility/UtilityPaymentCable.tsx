import React from 'react';

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
  InputRightElement,
  Select,
  Text,
} from '@chakra-ui/react';

const UtilityPaymentCable = () => {
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
        />
        <InputRightElement pointerEvents='none' h='100%'>
          <Icon as={PersonIcon} />
        </InputRightElement>
      </InputGroup>
      <Box mt='1.8rem'>
        <Text
          fontSize={{base: '13px', lg: '16px'}}
          fontFamily='Poppins'
          fontWeight='500'
          color='#000000'
        >
          Moses Ikechukwu
        </Text>
        <Text
          fontSize={{base: '13px', lg: '16px'}}
          fontFamily='Poppins'
          color='#000000'
        >
          No 10 Akintola road Ikeja, Lagos
        </Text>
      </Box>
      <Select
        width={{base: '100%', lg: '480px', mlg: '570px'}}
        height='50px'
        border={'none'}
        outline='none'
        placeholder='Select Data bundle'
        fontFamily='Poppins'
        color='#717171'
        focusBorderColor='white'
        borderRadius={'6px'}
        background={'#F5F5F5'}
        fontSize={{base: '12px', lg: '16px'}}
        mt={{base: '1.6rem', lg: '3rem'}}
      >
        {['Yeah', 'Okay', 'Yes'].map((each) => (
          <option key={each}>{each}</option>
        ))}
      </Select>
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
        >
          Pay N16,980
        </Button>
      </Flex>
    </Box>
  );
};

export default UtilityPaymentCable;
