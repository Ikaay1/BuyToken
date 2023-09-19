import { useRouter } from 'next/router';
import React from 'react';

import BulbIcon from '@/assets/BulbIcon';
import ComputerIcon from '@/assets/ComputerIcon';
import InternetIcon from '@/assets/InternetIcon';
import PhoneIcon from '@/assets/PhoneIcon';
import SearchIcon from '@/assets/SearchIcon';
import {
	Box,
	Flex,
	Icon,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from '@chakra-ui/react';

import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <Box
        px={{base: '.5rem', lg: '7rem'}}
        pt={{base: '.7rem', lg: '3.3rem'}}
        pb={{base: '7rem', lg: '10.5rem'}}
        bg='#4CAD73'
        position={'relative'}
      >
        {/* Desktop */}
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          display={{
            base: 'none',
            lg: 'flex',
          }}
        >
          <Image src='/assets/bt_logo.png' alt='BT logo' />
          <Flex w='359px' justifyContent={'space-between'} h='100%'>
            {['Home', 'About', 'Services', 'Contact'].map((each) => (
              <Text
                fontFamily='Inter'
                // fontWeight='600'
                lineHeight='19px'
                color='#FFFFFF'
                key={each}
              >
                {each}
              </Text>
            ))}
          </Flex>
          <Text
            fontFamily='Inter'
            h='100%'
            lineHeight='19px'
            color='#FFFFFF'
            cursor={'pointer'}
            onClick={() => router.push('/login')}
          >
            Login/Sign up
          </Text>
        </Flex>

        {/* Mobile */}
        <Flex
          display={{base: 'flex', lg: 'none'}}
          justifyContent={'space-between'}
          bg='#4CAD73'
          py={'1.5rem'}
          px={'.8rem'}
          alignItems={'center'}
        >
          <HamburgerMenu />
          <Image src='/assets/bt_logo.png' alt='Buy Token logo' h='100%' />
          <Text
            fontFamily='Inter'
            h='100%'
            fontSize={'10px'}
            color='#FFFFFF'
            cursor={'pointer'}
            onClick={() => router.push('/login')}
          >
            Login/Sign up
          </Text>
        </Flex>
        <Image
          position='absolute'
          left='0'
          top='31.5%'
          src='/assets/leftLight.png'
          alt='Left light'
        />
        <Image
          position='absolute'
          right='0'
          top='5%'
          src='/assets/rightLight.png'
          alt='Right light'
        />

        <Box mt={{base: '1rem', lg: '6rem'}}>
          <Text
            fontFamily='Raleway'
            fontWeight='700'
            fontSize={{base: '18px', lg: '36px'}}
            lineHeight={{lg: '42px'}}
            color='#FFFFFF'
            textAlign={'center'}
          >
            Welcome, What are you purchasing today?
          </Text>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            width={{lg: '574px'}}
            height='70px'
            background='#417657'
            boxShadow='0px 6px 10px 3px rgba(150, 150, 150, 0.1)'
            borderRadius='5px'
            mx='auto'
            mt={{base: '1rem', lg: '2.75rem'}}
          >
            <InputGroup
              width={{base: '92%', lg: '534px'}}
              height='40px'
              background='#FAFAFA'
              backdropFilter='blur(3px)'
              borderRadius='4px'
            >
              <InputLeftElement pointerEvents='none' h='100%'>
                <Icon as={SearchIcon} w='16.12px' h='16.12px' />
              </InputLeftElement>
              <Input
                placeholder={'Search here'}
                fontFamily='Poppins'
                fontStyle='normal'
                fontWeight='300'
                fontSize='12px'
                lineHeight='18px'
                color='#B0B0B0'
                h='100%'
              />
            </InputGroup>
          </Flex>
          I
        </Box>
        <Flex
          background='#FFFFFF'
          boxShadow='0px 1px 10px rgba(0, 0, 0, 0.25)'
          borderRadius='5px'
          p='1.5rem'
          w={{base: '96%', lg: '569.5px'}}
          maxWidth={{base: '410px', lg: '569.5px'}}
          justifyContent={'space-between'}
          mx={{lg: 'auto'}}
          position={'absolute'}
          bottom={{base: '-17%', lg: '-15%'}}
          left='50%'
          transform={'translateX(-50%)'}
        >
          {[
            {icon: BulbIcon, name: 'Electricity'},
            {icon: PhoneIcon, name: 'AitTime'},
            {icon: ComputerIcon, name: 'Cable TV'},
            {icon: InternetIcon, name: 'Internet'},
          ].map(({icon, name}) => (
            <Box key={name}>
              <Flex
                width={{base: '69.84px', lg: '86.16px'}}
                height={{base: '69.84px', lg: '86.16px'}}
                background='rgba(215, 215, 215, 0.2)'
                border='1.12644px solid #E1E1E1'
                borderRadius='5px'
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Icon
                  as={icon}
                  w={{base: '24.44px', lg: '30.16px'}}
                  h={{base: '34.92px', lg: '43.08px'}}
                />
              </Flex>
              <Text
                fontFamily='Poppins'
                fontSize={{base: '13px', lg: '18px'}}
                textAlign='center'
                color='#505050'
                mt='.5rem'
              >
                {name}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
