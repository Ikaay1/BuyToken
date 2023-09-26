import React from 'react';

import ErrorBadge from '@/assets/ErrorBadge';
import InfoBadge from '@/assets/InfoBadge';
import NotificationIcon from '@/assets/NotificationIcon';
import SuccessfulBadge from '@/assets/SuccessfulBadge';
import {scrollbarStyle} from '@/constants/utils';
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

const NotificationModal = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <Box position={'relative'} cursor='pointer' onClick={onOpen}>
        <Icon as={NotificationIcon} width='18' height='21' />
        <Text
          width='13px'
          height='13px'
          background='#417657'
          boxShadow='0px 0px 4px rgba(0, 0, 0, 0.15)'
          borderRadius='50px'
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          fontFamily='Inter'
          fontSize='8px'
          color='#FFFFFF'
          position={'absolute'}
          top='3px'
          right='-6px'
        >
          15
        </Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent justifyContent={'center'} alignItems={'center'}>
          <Box
            width='271px'
            background='#FFFFFF'
            borderRadius='6px'
            py='1.4rem'
            px='.89rem'
            right={{base: '50px', lg: '-280px'}}
            pos='absolute'
            top={{base: '0', lg: '0'}}
            boxShadow='0px 4px 35px 5px rgba(0, 0, 0, 0.25)'
            maxH='210px'
            bg='#FFFFFF'
            overflowY={'scroll'}
            sx={scrollbarStyle}
          >
            <Flex justifyContent={'flex-end'} alignItems={'center'}>
              <Text
                mr='2.5rem'
                fontFamily='Inter'
                fontWeight='500'
                fontSize='14px'
                color='#000000'
              >
                Notifications
              </Text>
              <Text fontFamily='Inter' fontSize='10px' color='#929292'>
                clear all
              </Text>
            </Flex>
            <Box mt='.85rem'>
              {[1, 2].map((each) => (
                <Box key={each} mt='.15rem'>
                  <Flex justifyContent={'space-between'}>
                    <Icon
                      mt='.14rem'
                      as={InfoBadge}
                      // as={SuccessfulBadge}
                      // as={ErrorBadge}
                      w='16px'
                      h='16px'
                    />
                    <Text
                      w='219px'
                      fontFamily='Inter'
                      fontSize='10px'
                      lineHeight='20px'
                      color='#929292'
                    >
                      This is a notification for information purposes. It
                      carries the info badge.
                    </Text>
                  </Flex>
                  <Divider
                    mt='.34rem'
                    width='100%'
                    border='1px solid #F5F5F5'
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NotificationModal;
