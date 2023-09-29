import React from 'react';

import CloseIcon from '@/assets/CloseIcon';
import FundWalletIcon from '@/assets/FundWalletIcon';
import InfoIcon from '@/assets/InfoIcon';
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

const FundWalletModal = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        mt='.45rem'
        onClick={onOpen}
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='token.modalOverlay' />
        <ModalContent justifyContent={'center'} alignItems={'center'}>
          <Box
            width={{base: '100%', lg: '438px'}}
            background='#FFFFFF'
            borderRadius='10px'
            pt='.8rem'
            pb='1.4rem'
          >
            <Flex justifyContent={'flex-end'} pr='.8rem'>
              <Icon
                onClick={onClose}
                as={CloseIcon}
                width={'14px'}
                height={'14px'}
                cursor='pointer'
              />
            </Flex>
            <Text
              fontFamily='Inter'
              fontWeight='500'
              fontSize='20px'
              color='#000000'
              textAlign={'center'}
              mt='1rem'
            >
              Fund with Transfer
            </Text>
            <Box px='1.2rem' mt='2rem'>
              {[
                {name: 'Account Number:', value: '0128770011'},
                {name: 'Account Name:', value: 'Benjamin John'},
                {name: 'Bank Name:', value: 'Wema Bank'},
              ].map(({name, value}) => (
                <>
                  <Flex justifyContent={'space-between'} mt='1rem'>
                    <Text fontFamily='Inter' fontSize='14px' color='#929292'>
                      {name}
                    </Text>
                    <Text fontFamily='Inter' fontSize='14px' color='#000000'>
                      {value}
                    </Text>
                  </Flex>
                  {name !== 'Bank Name:' && (
                    <Divider
                      mt='.8rem'
                      width='100%'
                      border='1px solid #929292'
                    />
                  )}
                </>
              ))}
              <Flex mt='3rem'>
                <Icon as={InfoIcon} width='24px' height='24px' />
                <Text
                  fontFamily='Inter'
                  fontWeight='500'
                  fontSize='14px'
                  lineHeight='20px'
                  textAlign='center'
                  color='#417657'
                >
                  Once your transfer is received, your wallet will be updated
                  immediately
                </Text>
              </Flex>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FundWalletModal;
