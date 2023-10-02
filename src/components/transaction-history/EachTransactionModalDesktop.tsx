import React from 'react';

import InflowIcon from '@/assets/InflowIcon';
import {
  Flex,
  Icon,
  Modal,
  ModalContent,
  ModalOverlay,
  Td,
  Text,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';

import TransactionDetails from './TransactionDetails';

const EachTransactionModalDesktop = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <Tr onClick={onOpen} cursor='pointer'>
        <Td>
          <Flex
            width='30.71px'
            height='30px'
            background='#F5F5F5'
            boxShadow='0px 0px 4px rgba(0, 0, 0, 0.15)'
            borderRadius='50px'
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Icon
              as={InflowIcon}
              //   as={OutflowIcon}
            />
          </Flex>
        </Td>
        {[
          'Funded wallet',
          '₦9,900.00',
          '56287W78E8E8W8W',
          'Funding',
          '19th Sep, 2023',
        ].map((each) => (
          <Td fontFamily='Inter' fontSize='14px' color='#929292' key={each}>
            {each}
          </Td>
        ))}
        <Td>
          <Text
            width='70px'
            height='27px'
            background='#F4FCF7'
            //   background='#C20B0B'
            //   background='#E6CBB3'
            borderRadius='1000px'
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
        </Td>
      </Tr>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='token.modalOverlay' />
        <ModalContent justifyContent={'center'} alignItems={'center'}>
          <TransactionDetails onClose={onClose} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default EachTransactionModalDesktop;
