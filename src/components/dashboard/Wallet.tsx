'use client';

import {useRouter} from 'next/router';
import React from 'react';

import DummyIcon from '@/assets/DummyIcon';
import {useAppDispatch} from '@/redux/app/hooks';
import {setUtility} from '@/redux/slices/serviceSlice';
import {Box, Button, Flex, Icon, Image, Text} from '@chakra-ui/react';

import Balance from './Balance';
import FrequentlyUsed from './FrequentlyUsed';

const Wallet = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <Box mt='2rem'>
      <Flex
        display={{base: 'block', lg: 'flex'}}
        justifyContent={'space-between'}
      >
        <Balance />
        <FrequentlyUsed />
      </Flex>
      <Flex
        display={{base: 'block', lg: 'flex'}}
        height={{lg: '168px'}}
        mt='1.9rem'
      >
        <Box
          h='100%'
          w={{lg: '60%'}}
          py={{base: '1rem', lg: 0}}
          background='#417657'
        >
          <Text
            fontFamily='Poppins'
            fontSize={{base: '14px', lg: '18px'}}
            lineHeight={{lg: '146.5%'}}
            color='#FFFFFF'
            w={{base: '300px', lg: '400px'}}
            mx='auto'
            mt={{lg: '1.3rem'}}
          >
            Are you out of Electricity Units and Cash? We’ve got you covered.
            Try{' '}
            <Box
              as='span'
              fontFamily='Raleway'
              fontWeight='700'
              fontSize={{base: '14px', lg: '18px'}}
              color='#FFFFFF'
            >
              BORROW NOW!
            </Box>
          </Text>
          <Flex justifyContent={'center'} mt='.95rem'>
            <Icon as={DummyIcon} width='48.71px' height='8.14px' />
          </Flex>
          <Flex justifyContent={'center'} mt='.7rem'>
            <Button
              width='208.61px'
              height='36px'
              background='#F3F3F3'
              boxShadow='0px 24.2056px 48.4112px 7.26168px rgba(0, 0, 0, 0.1)'
              borderRadius='5px'
              fontFamily='Raleway'
              fontWeight='500'
              fontSize='18px'
              color='#417657'
              onClick={() => {
                dispatch(setUtility({payload: {name: 'Borrow'}}));
                router.push('/utility');
              }}
            >
              Get Started!
            </Button>
          </Flex>
        </Box>
        <Image
          w={{base: '100%', lg: '40%'}}
          h={{base: '154px', lg: '100%'}}
          objectFit={'cover'}
          src='/assets/man.jpg'
          alt='Man'
        />
      </Flex>
    </Box>
  );
};

export default Wallet;
