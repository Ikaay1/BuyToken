import React from 'react';

import IdCardIcon from '@/assets/IdCardIcon';
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from '@chakra-ui/react';

const UtilityPaymentInternet = () => {
  return (
    <Box px={{lg: '2rem'}} mt={{base: '4rem', lg: '1.9rem'}}>
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
        />
        <InputRightElement pointerEvents='none' h='100%'>
          <Icon as={IdCardIcon} />
        </InputRightElement>
      </InputGroup>
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
        mt={{base: '1.6rem', lg: '2rem'}}
      >
        {['Yeah', 'Okay', 'Yes'].map((each) => (
          <option key={each}>{each}</option>
        ))}
      </Select>
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
      />
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
        >
          Pay N980
        </Button>
      </Flex>
    </Box>
  );
};

export default UtilityPaymentInternet;
