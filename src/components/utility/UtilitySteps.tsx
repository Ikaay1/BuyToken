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

const UtilitySteps = ({
  each,
  index,
  state,
  length,
}: {
  each: string;
  index: number;
  state: string;
  length: number;
}) => {
  return (
    <Box>
      <Flex alignItems={'center'}>
        <Text
          width='35px'
          height='35px'
          background={
            state === each.split(' ')[each.split(' ').length - 1]
              ? '#417657'
              : ' #F5F5F5'
          }
          border='3px solid #FFFFFF'
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          fontFamily='Inter'
          color={
            state === each.split(' ')[each.split(' ').length - 1]
              ? '#FFFFFF'
              : '#D5D5D5'
          }
          borderRadius={'50%'}
          mr='.8rem'
        >
          {index + 1}
        </Text>
        <Text
          fontFamily='Inter'
          fontSize='14px'
          color={
            state === each.split(' ')[each.split(' ').length - 1]
              ? '#000000'
              : '#D5D5D5'
          }
        >
          {each}
        </Text>
      </Flex>
      {index !== length - 1 && (
        <Flex width='35px' flexDirection={'column'} alignItems={'center'}>
          <Box height='30px' width='0' border='2px solid #F5F5F5'></Box>
        </Flex>
      )}
    </Box>
  );
};

export default UtilitySteps;
