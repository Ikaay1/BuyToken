import React from 'react';

import AddIcon from '@/assets/AddIcon';
import AirtimeIcon from '@/assets/AirtimeIcon';
import CableIcon from '@/assets/CableIcon';
import CloseIcon from '@/assets/CloseIcon';
import DataIcon from '@/assets/DataIcon';
import EditIcon from '@/assets/EditIcon';
import ElectricityIcon from '@/assets/ElectricityIcon';
import RightVector from '@/assets/RightVector';
import {useAppDispatch} from '@/redux/app/hooks';
import {useUpdateFavoriteUtilitiesMutation} from '@/redux/services/utilities.service';
import {setUserProfile} from '@/redux/slices/authSlice';
import {updateUtilities} from '@/redux/slices/utilitySlice';
import {
  Box,
  Flex,
  Icon,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

const UpdateUtilities = ({
  utility,
  setLoading,
}: {
  utility: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const dispatch = useAppDispatch();
  const [updateFavoriteUtilities, updateFavoriteUtilitiesStatus] =
    useUpdateFavoriteUtilitiesMutation();
  const toast = useToast();
  return (
    <>
      <Icon
        as={AddIcon}
        color='#D7D7D7'
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
        cursor={'pointer'}
        position='absolute'
        bottom='-4px'
        right='-4px'
      />
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
              Utilities
            </Text>
            <Box mt='.9rem'>
              {[
                {name: 'Electricity', icon: ElectricityIcon},
                {name: 'Airtime', icon: AirtimeIcon},
                {name: 'Data', icon: DataIcon},
                {name: 'Cable TV', icon: CableIcon},
              ].map(({name, icon}, i) => (
                <Flex
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  pl='2.3rem'
                  pr='1.15rem'
                  py='.85rem'
                  cursor='pointer'
                  key={name}
                  onClick={() => {
                    console.log('updateUtil', {new: name, old: utility});
                    setLoading(true);
                    updateFavoriteUtilities({new: name, old: utility}).then(
                      (res: any) => {
                        console.log('updateUtilities', res);
                        if (res?.data?.data) {
                          dispatch(
                            setUserProfile({
                              payload: {
                                data: res?.data?.data,
                              },
                            }),
                          );
                          setLoading(false);
                        } else {
                          toast({
                            title: 'Updating failed',
                            description:
                              res?.error?.data?.message ||
                              'Something went wrong',
                            status: 'error',
                            duration: 8000,
                            isClosable: true,
                            position: 'top-right',
                          });
                          setLoading(false);
                        }
                      },
                    );
                    onClose();
                  }}
                >
                  <Flex alignItems={'center'}>
                    <Icon as={icon} w='9.63px' h='14px' mr='.5rem' />
                    <Text fontFamily='Poppins' fontSize='13px' color='#313131'>
                      {name}
                    </Text>
                  </Flex>
                  <Icon as={RightVector} w='7.41px' h='12px' />
                </Flex>
              ))}
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateUtilities;
