import {useRouter} from 'next/router';
import React from 'react';

import CardIcon from '@/assets/CardIcon';
import CloseIcon from '@/assets/CloseIcon';
import HamburgerMenu from '@/assets/HamburgerMenu';
import HouseIcon from '@/assets/HouseIcon';
import LogoutIcon from '@/assets/LogoutIcon';
import PencilIcon from '@/assets/PencilIcon';
import TransactionIcon from '@/assets/TransactionIcon';
import {
  Box,
  Divider,
  Flex,
  Icon,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import Sidebar from './Sidebar';

const SidebarHamburgerMenu = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const router = useRouter();
  return (
    <>
      <Icon
        display={{lg: 'none'}}
        as={HamburgerMenu}
        onClick={onOpen}
        w='22.5px'
        h='18.2px'
      />
      <Modal
        isCentered
        onClose={() => {}}
        isOpen={isOpen}
        motionPreset='slideInLeft'
        scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent
          maxW={'316px'}
          w={'316px'}
          bottom='0'
          minH='100vh'
          h='100vh'
          m='0'
          position={'absolute'}
          left={0}
          background='#FAF9F6'
        >
          <Sidebar onClose={onClose} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default SidebarHamburgerMenu;
