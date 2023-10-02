import React from 'react';

import InflowIcon from '@/assets/InflowIcon';
import {
  Box,
  Divider,
  Flex,
  Icon,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import TransactionDetails from './TransactionDetails';

const EachTransactionModalMobile = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <Box mt='.8rem' onClick={onOpen} cursor='pointer'>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'}>
            <Flex
              width='26px'
              height='26px'
              background='#F5F5F5'
              boxShadow='0px 0px 4px rgba(0, 0, 0, 0.15)'
              borderRadius='50px'
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Icon
                as={InflowIcon}
                //   as={OutflowIcon}
                w='18px'
                h='18px'
              />
            </Flex>
            <Text
              w='102px'
              fontFamily='Inter'
              fontSize='13px'
              lineHeight='30px'
              color='#929292'
            >
              56287W78E8E...
            </Text>
          </Flex>
          <Text fontFamily='Inter' fontWeight='600' color='#313131'>
            ₦9,900.00
          </Text>
        </Flex>
        <Flex alignItems={'center'} justifyContent={'space-between'} mt='.5rem'>
          <Text
            fontFamily='Inter'
            fontWeight='500'
            fontSize='14px'
            color='#606060'
          >
            Funded wallet
          </Text>
          <Text fontFamily='Inter' fontSize='14px' color='#929292'>
            Funding
          </Text>
        </Flex>
        <Flex alignItems={'center'} justifyContent={'space-between'} mt='.5rem'>
          <Text fontFamily='Inter' fontSize='13px' color='#929292'>
            19th Sep, 2023
          </Text>
          <Text
            width='69px'
            height='25px'
            background='#F4FCF7'
            //   background='#C20B0B'
            //   background='#E6CBB3'
            borderRadius='100px'
            fontFamily='Inter'
            fontSize='14px'
            color='#417657'
            //   color='#FFFFFF'
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            Success
          </Text>
        </Flex>
        <Divider mt='.6rem' width='100%' border='1px solid #E9EFF5' />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='token.modalOverlay' />
        <ModalContent justifyContent={'center'} alignItems={'center'}>
          <TransactionDetails onClose={onClose} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default EachTransactionModalMobile;
