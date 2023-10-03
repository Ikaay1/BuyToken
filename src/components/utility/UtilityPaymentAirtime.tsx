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
} from '@chakra-ui/react';

const UtilityPaymentAirtime = () => {
  return (
    <Box px='2rem' mt='1.9rem'>
      <InputGroup
        border={'none'}
        outline='none'
        borderRadius={'6px'}
        background={'#F5F5F5'}
      >
        <Input
          width={{lg: '480px', mlg: '570px'}}
          height='50px'
          border={'none'}
          outline='none'
          placeholder='Phone Number'
          fontFamily='Poppins'
          color='#717171'
          focusBorderColor='white'
        />
        <InputRightElement pointerEvents='none' h='100%'>
          <Icon as={IdCardIcon} />
        </InputRightElement>
      </InputGroup>
      <Input
        width={{lg: '480px', mlg: '570px'}}
        height='50px'
        border={'none'}
        outline='none'
        placeholder='Amount'
        fontFamily='Poppins'
        color='#717171'
        focusBorderColor='white'
        borderRadius={'6px'}
        background={'#F5F5F5'}
        mt='2rem'
      />
      <Flex justifyContent={'flex-end'} mt='9rem'>
        <Button
          height='33px'
          background='#417657'
          box-shadow='0px 24.2056px 48.4112px 7.26168px rgba(0, 0, 0, 0.1)'
          borderRadius='5px'
          px='1.5rem'
          fontFamily='Raleway'
          fontWeight='600'
          color='#FFFFFF'
        >
          Pay N980
        </Button>
      </Flex>
    </Box>
  );
};

export default UtilityPaymentAirtime;
