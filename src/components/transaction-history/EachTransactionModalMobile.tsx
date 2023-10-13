import React from 'react';

import InflowIcon from '@/assets/InflowIcon';
import OutflowIcon from '@/assets/OutflowIcon';
import {TransactionInterface} from '@/constants/interface';
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

const EachTransactionModalMobile = ({
  eachTransaction,
}: {
  eachTransaction: TransactionInterface;
}) => {
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
              mr='.5rem'
            >
              <Icon
                as={
                  eachTransaction?.transactionType === 'debit'
                    ? OutflowIcon
                    : InflowIcon
                }
                w='18px'
                h='18px'
              />
            </Flex>
            <Text w='102px' fontFamily='Inter' fontSize='13px' color='#929292'>
              {eachTransaction?.refNumber?.length > 10
                ? `${eachTransaction?.refNumber?.slice(0, 11)}....`
                : eachTransaction?.refNumber}
            </Text>
          </Flex>
          <Text fontFamily='Inter' fontWeight='600' color='#313131'>
            ₦{eachTransaction?.amount}
          </Text>
        </Flex>
        <Flex alignItems={'center'} justifyContent={'space-between'} mt='.5rem'>
          <Text
            fontFamily='Inter'
            fontWeight='500'
            fontSize='14px'
            color='#606060'
          >
            {eachTransaction?.description}
          </Text>
          <Text fontFamily='Inter' fontSize='14px' color='#929292'>
            {eachTransaction?.billerType[0]?.toUpperCase() +
              eachTransaction?.billerType.slice(1)}
          </Text>
        </Flex>
        <Flex alignItems={'center'} justifyContent={'space-between'} mt='.5rem'>
          <Text fontFamily='Inter' fontSize='13px' color='#929292'>
            {new Date(eachTransaction?.createdAt).toString().slice(0, 15)}
          </Text>
          <Text
            width='69px'
            height='25px'
            background={
              eachTransaction?.status === 'success'
                ? '#F4FCF7'
                : eachTransaction?.status === 'failed'
                ? '#C20B0B'
                : '#E6CBB3'
            }
            borderRadius='100px'
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
