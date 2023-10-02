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
  Text,
} from '@chakra-ui/react';

const UtilityForm = ({
  setState,
}: {
  setState: React.Dispatch<React.SetStateAction<string>>;
}) => {
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
      <Flex mt={{base: '1rem', lg: '1.4rem'}}>
        {['Prepaid', 'Postpaid'].map((each) => (
          <Flex alignItems={'center'} key={each} mr='3.5rem'>
            <Checkbox
              width='16px'
              height='16px'
              background='#F5F5F5'
              borderRadius='2px'
              mr='.5rem'
            />
            <Text fontFamily='Poppins' color='#717171'>
              {each}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Box mt='1.8rem'>
        <Text
          fontSize={{base: '14px', lg: '16px'}}
          fontFamily='Poppins'
          fontWeight='500'
          color='#000000'
        >
          Moses Ikechukwu
        </Text>
        <Text
          fontSize={{base: '14px', lg: '16px'}}
          fontFamily='Poppins'
          color='#000000'
        >
          No 10 Akintola road Ikeja, Lagos
        </Text>
      </Box>
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
          onClick={() => setState('payment')}
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
