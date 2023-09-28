import {useRouter} from 'next/router';
import React from 'react';

import CardIcon from '@/assets/CardIcon';
import CloseIcon from '@/assets/CloseIcon';
import HouseIcon from '@/assets/HouseIcon';
import LogoutIcon from '@/assets/LogoutIcon';
import PencilIcon from '@/assets/PencilIcon';
import TransactionIcon from '@/assets/TransactionIcon';
import {useAppDispatch} from '@/redux/app/hooks';
import {logout} from '@/redux/slices/authSlice';
import {Box, Divider, Flex, Icon, Image, Text} from '@chakra-ui/react';
import {googleLogout} from '@react-oauth/google';

const Sidebar = ({onClose}: {onClose?: () => void}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    googleLogout();
    window.location.href = '/login';
  };
  return (
    <>
      <Flex
        w={{base: '316px', lg: '300px', mlg: '316px'}}
        justifyContent={'space-between'}
        flexDirection={'column'}
        background='#FAF9F6'
        h='100%'
      >
        <Box w='100%' pt='.8rem'>
          <Flex
            mx='1.5rem'
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Image src='/assets/bt_logo.png' w='47px' h='46px' alt='Bt logo' />
            <Icon
              onClick={onClose}
              as={CloseIcon}
              w='17.5px'
              h='17.5px'
              display={{lg: 'none'}}
            />
          </Flex>
          <Box ml='1.7rem' mt='4.5rem'>
            <Flex alignItems={'center'} pr='.6rem'>
              <Box position={'relative'} mr='.7rem'>
                <Image
                  src='/assets/dummy_profilepic.png'
                  alt='Default profile image'
                />
                <Image
                  src='/assets/camera.png'
                  alt='Default profile image'
                  position={'absolute'}
                  right='0'
                  bottom='0'
                />
              </Box>
              <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                  <Text
                    fontFamily='Raleway'
                    fontStyle='normal'
                    fontWeight='700'
                    fontSize='18px'
                    lineHeight='26px'
                    color='#1E1E1F'
                  >
                    Moses
                  </Text>
                  <Text
                    fontFamily='Raleway'
                    fontStyle='normal'
                    fontWeight='500'
                    fontSize='14px'
                    lineHeight='26px'
                    color='#1E1E1F'
                  >
                    +2347010000000
                  </Text>
                </Box>
                <Icon ml='.65rem' as={PencilIcon} />
              </Flex>
            </Flex>
          </Box>
          <Box mt='2rem'>
            {[
              {name: 'Dashboard', icon: HouseIcon, route: '/dashboard'},
              {name: 'Pay Utility Bills', icon: CardIcon, route: '/utility'},
              {
                name: 'Transaction History',
                icon: TransactionIcon,
                route: '/transaction-history',
              },
            ].map(({name, icon, route}) => (
              <Flex
                alignItems={'center'}
                py='.8rem'
                key={name}
                bg={route === router.asPath ? '#4CAD73' : undefined}
                pl='1.7rem'
                cursor={'pointer'}
                onClick={() => router.push(route)}
              >
                <Icon
                  mr='1.1rem'
                  as={icon}
                  color={route === router.asPath ? '#FFFFFF' : '#4CAD73'}
                />
                <Text
                  fontFamily='Inter'
                  fontWeight='500'
                  color={route === router.asPath ? '#FFFFFF' : '#929292'}
                >
                  {name}
                </Text>
              </Flex>
            ))}
          </Box>
        </Box>
        <Box>
          <Divider mb='.95rem' width='100%' border='1px solid #CCCCCC' />
          <Flex
            alignItems={'center'}
            pl='1.45rem'
            pb='2rem'
            onClick={handleLogout}
            cursor='pointer'
          >
            <Icon as={LogoutIcon} w='18px' h='17px' mr='.7rem' />
            <Text fontFamily='Inter' fontSize='18px' color='#929292'>
              Logout
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Sidebar;
