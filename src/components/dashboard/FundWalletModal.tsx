import React from 'react';

import CloseIcon from '@/assets/CloseIcon';
import FundWalletIcon from '@/assets/FundWalletIcon';
import {
  Box,
  Flex,
  Icon,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

const FundWalletModal = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        mt='.45rem'
        // onClick={onOpen}
        cursor={'pointer'}
      >
        <Text
          fontFamily='Inter'
          fontWeight='500'
          fontSize='14px'
          color='#417657'
          mr='.45rem'
        >
          Fund Wallet
        </Text>
        <Icon as={FundWalletIcon} />
      </Flex>
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='token.modalOverlay' />
        <ModalContent justifyContent={'center'} alignItems={'center'}>
          <Box width='438px' background='#FFFFFF' borderRadius='10px'>
            <Flex justifyContent={'flex-end'} pr='.8rem'>
              <Icon as={CloseIcon} width={"14px"} height={"14px"} />
            </Flex>
          </Box>
        </ModalContent>
      </Modal> */}
    </>
  );
};

export default FundWalletModal;
