import React from 'react';

import NavbarSearchIcon from '@/assets/NavbarSearchIcon';
import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

const RecentTransaction = ({children}: {children: React.JSX.Element}) => {
  return (
    <Box>
      <Flex
        alignItems={'center'}
        width='100%'
        height='77px'
        background='#FFFFFF'
        pl='5rem'
      >
        <InputGroup border={'none'} outline='none' w='500px'>
          <InputLeftElement pointerEvents='none' h='100%'>
            <Icon as={NavbarSearchIcon} />
          </InputLeftElement>
          <Input
            border={'none'}
            outline='none'
            placeholder='Search Transactions'
            fontFamily='Poppins'
            fontWeight='300'
            fontSize='14px'
            color='#B0B0B0'
            focusBorderColor='white'
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default RecentTransaction;
