import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import {
	Box,
	Flex,
	Icon,
	Image,
	Modal,
	ModalContent,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react';

const HamburgerMenu = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Icon
        as={GiHamburgerMenu}
        onClick={onOpen}
        color='white'
        w='39px'
        h='39px'
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
          maxW={'290px'}
          w={'290px'}
          bottom='0'
          minH='100vh'
          m='0'
          position={'absolute'}
          left={0}
          bg='#4CAD73'
        >
          <>
            <Box p='1rem' pt='7rem'>
              <Flex justifyContent={'flex-end'}>
                <Icon
                  as={AiOutlineCloseCircle}
                  onClick={onClose}
                  color='white'
                  w='39px'
                  h='39px'
                />
              </Flex>
              <Image
                src='/assets/bt_logo.png'
                mt='.5rem'
                alt='Kruz logo'
                h='100%'
              />
              <Box mt='2rem'>
                {['Home', 'About', 'Services', 'Contact'].map((each, i) => (
                  <Text
                    mt={'1rem'}
                    fontWeight='700'
                    cursor='pointer'
                    fontFamily='Inter'
                    // fontWeight='600'
                    color='#FFFFFF'
                    key={each}
                  >
                    {each}
                  </Text>
                ))}
              </Box>
            </Box>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HamburgerMenu;
