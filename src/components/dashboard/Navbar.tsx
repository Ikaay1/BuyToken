import React from 'react';

import NavbarSearchIcon from '@/assets/NavbarSearchIcon';
import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import NotificationModal from './NotificationModal';

const Navbar = () => {
  return (
    <Flex
      alignItems={'center'}
      height='77px'
      background='#FFFFFF'
      px='4.5rem'
      justifyContent={'space-between'}
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
      <NotificationModal />
    </Flex>
  );
};

export default Navbar;
