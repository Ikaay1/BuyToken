import React from 'react';

import NavbarSearchIcon from '@/assets/NavbarSearchIcon';
import NotificationIcon from '@/assets/NotificationIcon';
import {
	Box,
	Flex,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from '@chakra-ui/react';

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
        <Box position={'relative'}>
          <Icon as={NotificationIcon} width='18' height='21' />
          <Text
            width='13px'
            height='13px'
            background='#417657'
            boxShadow='0px 0px 4px rgba(0, 0, 0, 0.15)'
            borderRadius='50px'
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            fontFamily='Inter'
            fontSize='8px'
            color='#FFFFFF'
            position={'absolute'}
            top='3px'
            right='-6px'
          >
            15
          </Text>
        </Box>
      </Flex>
  )
}

export default Navbar
