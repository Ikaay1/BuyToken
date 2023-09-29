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
          placeholder='Meter Number'
          fontFamily='Poppins'
          color='#717171'
          focusBorderColor='white'
        />
        <InputRightElement pointerEvents='none' h='100%'>
          <Icon as={PersonIcon} />
        </InputRightElement>
      </InputGroup>
      <Flex mt='1.4rem'>
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
        <Text fontFamily='Poppins' fontWeight='500' color='#000000'>
          Moses Ikechukwu
        </Text>
        <Text fontFamily='Poppins' color='#000000'>
          No 10 Akintola road Ikeja, Lagos
        </Text>
      </Box>
      <Input
        borderRadius={'6px'}
        background={'#F5F5F5'}
        width={{lg: '480px', mlg: '570px'}}
        height='50px'
        border={'none'}
        outline='none'
        placeholder='Amount'
        fontFamily='Poppins'
        color='#717171'
        focusBorderColor='white'
        mt='2rem'
      />
      <Flex justifyContent={'flex-end'}>
        <Button
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          width='132px'
          height='33px'
          background='#417657'
          boxShadow='0px 24.2056px 48.4112px 7.26168px rgba(0, 0, 0, 0.1)'
          borderRadius='5px'
          fontFamily='Raleway'
          fontWeight='500'
          fontSize='13px'
          color='#FFFFFF'
          pl='3rem'
          mt='3rem'
          onClick={() => setState('payment')}
        >
          Next
          <Icon as={WhiteArrowRight} w='13px' h='13px' />
        </Button>
      </Flex>
    </Box>
  );
};

export default UtilityForm;
