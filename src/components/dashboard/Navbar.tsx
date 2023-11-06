import {useRouter} from 'next/router';
import React, {useEffect} from 'react';

import NavbarSearchIcon from '@/assets/NavbarSearchIcon';
import {useAppDispatch} from '@/redux/app/hooks';
import {useGetUserQuery} from '@/redux/services/user.service';
import {setUserProfile} from '@/redux/slices/authSlice';
import {
  Box,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';

import NotificationModal from './NotificationModal';
import SidebarHamburgerMenu from './SidebarHamburgerMenu';

const Navbar = () => {
  const {data} = useGetUserQuery('');
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (data) {
      dispatch(
        setUserProfile({
          payload: {
            data,
          },
        }),
      );
    }
  }, [data]);

  return (
    <Flex
      alignItems={'center'}
      height='77px'
      background='#FFFFFF'
      px={{base: '1rem', lg: '4.5rem'}}
      justifyContent={'space-between'}
    >
      <Flex alignItems={'center'}>
        <Image
          src='/assets/bt_logo.png'
          w='47px'
          h='46px'
          display={{lg: 'none'}}
          mr={'.5rem'}
          cursor='pointer'
          onClick={() => router.push('/dashboard')}
          alt='Bt logo'
        />
        <Text
          fontFamily='Poppins'
          fontWeight='300'
          fontSize='14px'
          color='#B0B0B0'
          ml={{lg: '2rem'}}
        >
          ...unified utility payment gateway
        </Text>
      </Flex>

      {/* <InputGroup
        border={'none'}
        outline='none'
        w={{base: '170px', lg: '500px'}}
      >
        <InputLeftElement pointerEvents='none' h='100%'>
          <Icon as={NavbarSearchIcon} />
        </InputLeftElement>
        <Input
          border={'none'}
          outline='none'
          placeholder='Search Transactions'
          fontFamily='Poppins'
          fontWeight='300'
          fontSize={{base: '13px', lg: '14px'}}
          color='#B0B0B0'
          focusBorderColor='white'
        />
      </InputGroup> */}

      <Flex alignItems={'center'}>
        <NotificationModal />
        <SidebarHamburgerMenu />
      </Flex>
    </Flex>
  );
};

export default Navbar;
