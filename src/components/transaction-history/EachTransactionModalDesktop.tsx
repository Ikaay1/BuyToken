import React from 'react';

import InflowIcon from '@/assets/InflowIcon';
import OutflowIcon from '@/assets/OutflowIcon';
import {TransactionInterface} from '@/constants/interface';
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

const EachTransactionModalDesktop = ({
  eachTransaction,
}: {
  eachTransaction: TransactionInterface;
}) => {
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
              as={
                eachTransaction?.transactionType === 'debit'
                  ? OutflowIcon
                  : InflowIcon
              }
            />
          </Flex>
        </Td>
        {[
          eachTransaction?.description,
          `₦${eachTransaction?.amount}`,
          eachTransaction?.refNumber,
          eachTransaction?.billerType[0]?.toUpperCase() +
            eachTransaction?.billerType.slice(1),
          new Date(eachTransaction?.createdAt).toString().slice(0, 15),
        ].map((each) => (
          <Td fontFamily='Inter' fontSize='14px' color='#929292' key={each}>
            {each}
          </Td>
        ))}
        <Td>
          <Text
            width='70px'
            height='27px'
            background={
              eachTransaction?.status === 'success'
                ? '#F4FCF7'
                : eachTransaction?.status === 'failed'
                ? '#C20B0B'
                : '#E6CBB3'
            }
            borderRadius='1000px'
            fontFamily='Inter'
            fontSize='14px'
            color={
              eachTransaction?.status === 'success' ? '#417657' : '#FFFFFF'
            }
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            {eachTransaction?.status === 'success'
              ? 'Success'
              : eachTransaction?.status === 'failed'
              ? 'Failed'
              : 'Pending'}
          </Text>
        </Td>
      </Tr>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='token.modalOverlay' />
        <ModalContent justifyContent={'center'} alignItems={'center'}>
          <TransactionDetails
            onClose={onClose}
            eachTransaction={eachTransaction}
          />
        </ModalContent>
      </Modal>
    </>
  );
};

export default EachTransactionModalDesktop;
