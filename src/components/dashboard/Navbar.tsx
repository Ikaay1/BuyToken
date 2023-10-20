import React, {useEffect} from 'react';

import NavbarSearchIcon from '@/assets/NavbarSearchIcon';
import {useAppDispatch} from '@/redux/app/hooks';
import {useGetUserQuery} from '@/redux/services/user.service';
import {setUserProfile} from '@/redux/slices/authSlice';
import {
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import NotificationModal from './NotificationModal';
import SidebarHamburgerMenu from './SidebarHamburgerMenu';

const Navbar = () => {
  const {data} = useGetUserQuery('');
  const dispatch = useAppDispatch();

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
      <Image
        src='/assets/bt_logo.png'
        w='47px'
        h='46px'
        display={{lg: 'none'}}
        alt='Bt logo'
      />
      <InputGroup
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
      </InputGroup>
      <NotificationModal />
      <SidebarHamburgerMenu />
    </Flex>
  );
};

export default Navbar;
