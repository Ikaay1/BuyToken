import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {CSSTransition} from 'react-transition-group';

import BulbIcon from '@/assets/BulbIcon';
import ComputerIcon from '@/assets/ComputerIcon';
import InternetIcon from '@/assets/InternetIcon';
import PhoneIcon from '@/assets/PhoneIcon';
import RightIcon from '@/assets/RightIcon';
import {Box, Button, Flex, Icon, Image, Text} from '@chakra-ui/react';

import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [showMessage, setShowMessage] = useState(1);
  return (
    <Box
      backgroundImage={'url(/assets/header_background.png)'}
      backgroundRepeat={'no-repeat'}
      alignItems={'center'}
      pb='3.5rem'
      position={'relative'}
    >
      <Flex
        justifyContent='space-between'
        pl='5rem'
        pr='3.5rem'
        pt='2rem'
        display={{base: 'none', lg: 'flex'}}
      >
        <Image src='/assets/buytoken_logo.png' alt='buytoken logo' />
        <Flex alignItems={'center'}>
          <Flex mr='3.2rem'>
            {['Home', 'Why BuyToken', 'FAQ', 'Contact'].map((each) => (
              <Text
                fontFamily='Poppins'
                fontWeight='600'
                color='#FFFFFF'
                mr='1.7rem'
                key={each}
              >
                {each}
              </Text>
            ))}
          </Flex>
          <Flex>
            <Link href='/login'>
              <Button
                width='131px'
                height='32px'
                background='#4CAD73'
                borderRadius='5px'
                fontFamily='Poppins'
                fontWeight='500'
                color='#FFFFFF'
                mr='.3rem'
              >
                Login
              </Button>
            </Link>
            <Link href='/signup'>
              <Button
                width='131px'
                height='32px'
                background='#FFFFFF'
                borderRadius='5px'
                fontFamily='Poppins'
                fontWeight='500'
                color='#AD4C86'
              >
                Signup
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>

      {/* Mobile */}
      <Flex
        display={{base: 'flex', lg: 'none'}}
        justifyContent={'space-between'}
        py={'1.5rem'}
        px={'.8rem'}
        alignItems={'center'}
      >
        <HamburgerMenu />
        <Image src='/assets/buytoken_logo.png' alt='Buy Token logo' h='100%' />
        <Link href='/login'>
          <Text
            fontFamily='Inter'
            h='100%'
            fontSize={'10px'}
            color='#FFFFFF'
            cursor={'pointer'}
          >
            Login/Sign up
          </Text>
        </Link>
      </Flex>

      <Box mt={{base: '8rem', lg: '10rem'}}>
        {[
          {
            number: 1,
            header: '🚀 Simplify with BuyToken!',
            description:
              'No more utility bill chaos—just streamlined, organized living.',
          },
          {
            number: 2,
            header: '🚀 Manchester United!',
            description: 'Ten Hag',
          },
          {
            number: 3,
            header: '🚀 New Boy in Town!',
            description: 'Listen and Enjoy',
          },
        ].map((each) => (
          <CSSTransition
            key={each.number}
            in={showMessage === each.number}
            timeout={300}
            classNames='alert'
            unmountOnExit
            // onEnter={() => setShowButton(false)}
            // onExited={() => setShowButton(true)}
          >
            <Box display={showMessage !== each.number ? 'none' : 'block'}>
              <Text
                fontFamily='Raleway'
                fontWeight='700'
                fontSize={{base: '24px', lg: '36px'}}
                color='#FFFFFF'
                textAlign={'center'}
              >
                {each.header}
              </Text>
              <Text
                fontFamily='Poppins'
                fontSize={{base: '14px', lg: '18px'}}
                textAlign='center'
                color='#FFFFFF'
                mt={{base: '.7rem', lg: '2rem'}}
              >
                {each.description}
              </Text>
            </Box>
          </CSSTransition>
        ))}
        <Flex justifyContent={'center'} mt={{base: '1.3rem', lg: '1.15rem'}}>
          <Link href='/signup'>
            <Button
              width='221px'
              height='46px'
              background='#AD4C86'
              borderRadius='5px'
              fontFamily='Poppins'
              fontWeight='500'
              color='#FFFFFF'
            >
              Get Started{' '}
              <Icon
                ml='.6rem'
                as={RightIcon}
                w={{base: '4.47px', lg: '7.41px'}}
                h='12px'
              />
            </Button>
          </Link>
        </Flex>
        <Flex justifyContent={'center'} mt={{base: '5rem', lg: '6.5rem'}}>
          {[1, 2, 3].map((each) => (
            <Box
              key={each}
              cursor='pointer'
              width='55px'
              height='7px'
              background={showMessage === each ? '#AD4C86' : '#FFFFFF'}
              mx={each === 2 ? '1.1rem' : undefined}
              onClick={() => setShowMessage(each)}
            ></Box>
          ))}
        </Flex>
      </Box>
      <Flex
        background='#FFFFFF'
        boxShadow='0px 1px 10px rgba(0, 0, 0, 0.25)'
        borderRadius='5px'
        p='.8rem'
        w={{base: '96%', lg: '569.5px'}}
        maxWidth={{base: '410px', lg: '569.5px'}}
        justifyContent={'space-between'}
        mx={{lg: 'auto'}}
        position={'absolute'}
        bottom={{base: '-19%', lg: '-19%'}}
        left='50%'
        transform={'translateX(-50%)'}
      >
        {[
          {icon: BulbIcon, name: 'Electricity'},
          {icon: PhoneIcon, name: 'Airtime'},
          {icon: ComputerIcon, name: 'Cable TV'},
          {icon: InternetIcon, name: 'Internet'},
        ].map(({icon, name}) => (
          <Box key={name}>
            <Link href='/login'>
              <Flex
                width={{base: '69.84px', lg: '86.16px'}}
                height={{base: '69.84px', lg: '86.16px'}}
                background='rgba(215, 215, 215, 0.2)'
                border='1.12644px solid #E1E1E1'
                borderRadius='5px'
                justifyContent={'center'}
                alignItems={'center'}
                cursor='pointer'
              >
                <Icon
                  as={icon}
                  w={{base: '24.44px', lg: '30.16px'}}
                  h={{base: '34.92px', lg: '43.08px'}}
                />
              </Flex>
            </Link>
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
  );
};

export default Header;
