import {useRouter} from 'next/router';
import React from 'react';

import CardIcon from '@/assets/CardIcon';
import HouseIcon from '@/assets/HouseIcon';
import PencilIcon from '@/assets/PencilIcon';
import TransactionIcon from '@/assets/TransactionIcon';
import {Box, Flex, Icon, Image, Text} from '@chakra-ui/react';

const Sidebar = () => {
  const router = useRouter();
  return (
    <Box
      pt='.8rem'
      w={{base: '300px', mlg: '316px'}}
      background='#FAF9F6'
      display={{base: 'none', lg: 'block'}}
    >
      <Image ml='1.7rem' src='/assets/bt_logo.png' alt='Bt logo' />
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
  );
};

export default Sidebar;
