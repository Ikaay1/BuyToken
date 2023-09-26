import {useRouter} from 'next/router';
import React from 'react';

import CardIcon from '@/assets/CardIcon';
import CloseIcon from '@/assets/CloseIcon';
import HamburgerMenu from '@/assets/HamburgerMenu';
import HouseIcon from '@/assets/HouseIcon';
import PencilIcon from '@/assets/PencilIcon';
import TransactionIcon from '@/assets/TransactionIcon';
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
          m='0'
          position={'absolute'}
          left={0}
          background='#FAF9F6'
        >
          <>
            <Box pt='.8rem'>
              <Flex
                mx='1.5rem'
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Image src='/assets/bt_logo.png' alt='Bt logo' />
                <Icon onClick={onClose} as={CloseIcon} w='30px' h='30px' />
              </Flex>
              <Box ml='1.7rem' mt='4.5rem'>
                <Flex flexDirection={'column'} alignItems={'center'} pr='.6rem'>
                  <Box position={'relative'}>
                    <Image
                      src='/assets/dummy_profilepic.png'
                      alt='Default profile image'
                    />
                    <Image
                      src='/assets/camera.png'
                      alt='Default profile image'
                      position={'absolute'}
                      right='0'
                      bottom='0'
                    />
                  </Box>
                  <Flex
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    mt='1.5rem'
                  >
                    <Box>
                      <Text
                        fontFamily='Raleway'
                        fontStyle='normal'
                        fontWeight='700'
                        fontSize='18px'
                        lineHeight='26px'
                        color='#1E1E1F'
                      >
                        Moses
                      </Text>
                      <Text
                        fontFamily='Raleway'
                        fontStyle='normal'
                        fontWeight='500'
                        fontSize='14px'
                        lineHeight='26px'
                        color='#1E1E1F'
                      >
                        +2347010000000
                      </Text>
                    </Box>
                    <Icon ml='.65rem' as={PencilIcon} />
                  </Flex>
                </Flex>
              </Box>
              <Box mt='2rem'>
                {[
                  {name: 'Dashboard', icon: HouseIcon, route: '/dashboard'},
                  {
                    name: 'Pay Utility Bills',
                    icon: CardIcon,
                    route: '/utility',
                  },
                  {
                    name: 'Transaction History',
                    icon: TransactionIcon,
                    route: '/transaction-history',
                  },
                ].map(({name, icon, route}) => (
                  <Flex
                    alignItems={'center'}
                    py='.8rem'
                    key={name}
                    bg={route === router.asPath ? '#4CAD73' : undefined}
                    pl='1.7rem'
                    cursor={'pointer'}
                    onClick={() => router.push(route)}
                  >
                    <Icon
                      mr='1.1rem'
                      as={icon}
                      color={route === router.asPath ? '#FFFFFF' : '#4CAD73'}
                    />
                    <Text
                      fontFamily='Inter'
                      fontWeight='500'
                      color={route === router.asPath ? '#FFFFFF' : '#929292'}
                    >
                      {name}
                    </Text>
                  </Flex>
                ))}
              </Box>
            </Box>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SidebarHamburgerMenu;
