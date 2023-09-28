import React from 'react';

import {Box, Flex, Text} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box mt='.5rem'>
      <Flex
        w='310px'
        justifyContent={'space-between'}
        alignItems={'center'}
        mx='auto'
      >
        <Text
          fontFamily='Inter'
          fontSize={{base: '13px', lg: '14px'}}
          color='#929292'
        >
          Terms & Conditions
        </Text>
        <Box
          width='5px'
          height='5px'
          background='#242424'
          borderRadius={'50%'}
        ></Box>
        <Text
          fontFamily='Inter'
          fontSize={{base: '13px', lg: '14px'}}
          color='#929292'
        >
          Privacy Policy
        </Text>
        <Box
          width='5px'
          height='5px'
          background='#242424'
          borderRadius={'50%'}
        ></Box>
        <Text
          fontFamily='Inter'
          fontSize={{base: '13px', lg: '14px'}}
          color='#929292'
        >
          Help
        </Text>
      </Flex>
      <Text
        fontFamily='Inter'
        fontSize={{base: '13px', lg: '14px'}}
        color='#242424'
        textAlign={'center'}
        mt='.25rem'
        pb='.5rem'
      >
        © 2023. BuyToken
      </Text>
    </Box>
  );
};

export default Footer;
