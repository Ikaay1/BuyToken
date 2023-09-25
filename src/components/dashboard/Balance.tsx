import React, {useState} from 'react';

import HideIcon from '@/assets/HideIcon';
import ShowIcon from '@/assets/ShowIcon';
import WalletIcon from '@/assets/WalletIcon';
import {Box, Flex, Icon, Image, Text} from '@chakra-ui/react';

import FundWalletModal from './FundWalletModal';

const Balance = () => {
  const [show, setShow] = useState(false);
  return (
    <Box
      w='48%'
      background='#FFFDFD'
      boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
      borderRadius='16px'
      px='1.1rem'
      pt='1.4rem'
      h='223px'
      position='relative'
    >
      <Image
        position='absolute'
        top='0'
        left='0'
        src='/assets/wallet-up.png'
        alt='Wallet Up'
      />
      <Image
        position='absolute'
        bottom='0'
        right='17px'
        src='/assets/wallet-down.png'
        alt='Wallet Down'
      />
      <Box position='relative'>
        <Flex w='100%' justifyContent={'space-between'}>
          <Text fontFamily='Inter' fontWeight='500' color='#313131'>
            Wallet
          </Text>
          <Flex
            alignItems={'center'}
            onClick={() => setShow((prevShow) => !prevShow)}
            cursor='pointer'
          >
            <Text mr='.5rem' fontFamily='Inter' fontSize='14px' color='#242424'>
              {show ? 'Hide' : 'Show'}
            </Text>
            <Icon as={show ? HideIcon : ShowIcon} w='16px' h='16px' />
          </Flex>
        </Flex>
        <Flex pl='2.1rem' mt='1.3rem'>
          <Box
            width='95px'
            height='91.3px'
            background='rgba(76, 173, 115, 0.2)'
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={'50%'}
            mr='1rem'
          >
            <Icon as={WalletIcon} width='36.42px' height='33.48px' />
          </Box>
          <Box>
            <Text
              textAlign={'center'}
              fontFamily='Inter'
              fontSize='14px'
              color='#242424'
              lineHeight='20px'
            >
              Balance
            </Text>
            <Text
              fontFamily='Raleway'
              fontWeight='700'
              fontSize={show ? '32px' : '50px'}
              color='#313131'
              lineHeight={'48px'}
              mt={show ? '0' : '.88rem'}
            >
              {show ? '₦5,000.00' : '*********'}
            </Text>
          </Box>
        </Flex>
        <FundWalletModal />
      </Box>
    </Box>
  );
};

export default Balance;
