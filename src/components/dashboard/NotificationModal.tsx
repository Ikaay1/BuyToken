import React, {useEffect, useState} from 'react';

import ErrorBadge from '@/assets/ErrorBadge';
import InfoBadge from '@/assets/InfoBadge';
import NoNoticationsIcon from '@/assets/NoNoticationsIcon';
import NotificationIcon from '@/assets/NotificationIcon';
import SuccessfulBadge from '@/assets/SuccessfulBadge';
import {scrollbarStyle} from '@/constants/utils';
import {
  useClearNotificationsMutation,
  useGetNotificationsQuery,
  useReadNotificationMutation,
} from '@/redux/services/notifications.service';
import {
  Box,
  Divider,
  Flex,
  Icon,
  Modal,
  ModalContent,
  ModalOverlay,
  Skeleton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

const NotificationModal = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {data, isFetching, refetch} = useGetNotificationsQuery('');
  const [unread, setUnread] = useState(0);
  const [readNotification, readNotificationStatus] =
    useReadNotificationMutation();
  const [clearNotifications, clearNotificationsStatus] =
    useClearNotificationsMutation();

  useEffect(() => {
    if (data) {
      setUnread(
        data?.data?.filter((each: {readStatus: boolean}) => !each?.readStatus)
          ?.length,
      );
    }
  }, [data]);

  console.log('notifications', data);
  return (
    <>
      <Box position={'relative'} cursor='pointer' onClick={onOpen}>
        <Icon as={NotificationIcon} width='18' height='21' />
        {unread ? (
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
            {unread}
          </Text>
        ) : null}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent justifyContent={'center'} alignItems={'center'}>
          <Box
            width='271px'
            background='#FFFFFF'
            borderRadius='6px'
            py='1.4rem'
            px='.89rem'
            right={{base: '50px', lg: '-320px', mlg: '-380px'}}
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
              <Text
                fontFamily='Inter'
                fontSize='10px'
                color='#929292'
                onClick={async () => {
                  if (data?.data?.length > 0) {
                    if (!clearNotificationsStatus.isLoading) {
                      await clearNotifications({});
                    }
                  }
                }}
                cursor={
                  data?.data?.length > 0 && !clearNotificationsStatus.isLoading
                    ? 'pointer'
                    : 'default'
                }
              >
                clear all
              </Text>
            </Flex>
            <Box mt='.85rem'>
              {isFetching ? (
                [1, 2].map((each) => (
                  <Skeleton key={each} mt='.65rem' w='100%' h='22px'></Skeleton>
                ))
              ) : !data ? (
                <Box
                  fontFamily={'Poppins'}
                  fontSize={'11px'}
                  fontWeight={'500'}
                  textAlign={'center'}
                  mt='1rem'
                >
                  Something went wrong
                </Box>
              ) : !data?.data?.length ? (
                <Box
                  fontFamily={'Poppins'}
                  fontSize={'11px'}
                  fontWeight={'500'}
                  textAlign={'center'}
                  mt='1rem'
                >
                  No Notifications yet
                </Box>
              ) : (
                data?.data.map(
                  (each: {
                    type: string;
                    message: string;
                    readStatus: boolean;
                    _id: string;
                  }) => (
                    <Box key={each._id} mt='.34rem'>
                      <Flex
                        justifyContent={'space-between'}
                        cursor={
                          !each?.readStatus && !readNotificationStatus.isLoading
                            ? 'pointer'
                            : 'default'
                        }
                        onClick={async () => {
                          if (
                            !each?.readStatus &&
                            !readNotificationStatus.isLoading
                          ) {
                            await readNotification(each?._id);
                            refetch();
                          }
                        }}
                      >
                        <Icon
                          mt='.14rem'
                          as={
                            each?.type === 'info'
                              ? InfoBadge
                              : each?.type === 'success'
                              ? SuccessfulBadge
                              : ErrorBadge
                          }
                          w='16px'
                          h='16px'
                          mr='.6rem'
                        />
                        <Text
                          w='219px'
                          fontFamily='Inter'
                          fontSize='10px'
                          lineHeight='20px'
                          color='#929292'
                          fontWeight={!each?.readStatus ? '700' : '400'}
                        >
                          {each?.message}
                        </Text>
                      </Flex>
                      <Divider
                        mt='.34rem'
                        width='100%'
                        border='1px solid #F5F5F5'
                      />
                    </Box>
                  ),
                )
              )}
            </Box>
            {/* <Box mt='2rem'>
              <Flex justifyContent={'center'}>
                <Icon as={NoNoticationsIcon} w='30px' h='30px' />
              </Flex>
              <Text
                fontFamily='Inter'
                fontSize='10px'
                lineHeight='20px'
                textAlign='center'
                color='#929292'
                mt='1.1rem'
              >
                You do not have any notifications yet.
              </Text>
            </Box> */}
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NotificationModal;
