import React from 'react';

import AirtimeIcon from '@/assets/AirtimeIcon';
import CableIcon from '@/assets/CableIcon';
import CloseIcon from '@/assets/CloseIcon';
import DataIcon from '@/assets/DataIcon';
import EditIcon from '@/assets/EditIcon';
import ElectricityIcon from '@/assets/ElectricityIcon';
import RightVector from '@/assets/RightVector';
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

const EditUtilities = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <Icon as={EditIcon} cursor='pointer' onClick={onOpen} w='12px' h='12px' />
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
              ].map(({name, icon}) => (
                <Flex
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  pl='2.3rem'
                  pr='1.15rem'
                  py='.85rem'
                  cursor='pointer'
                  key={name}
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

export default EditUtilities;
