import React from 'react';

import FacebookIcon from '@/assets/FacebookIcon';
import InstagramIcon from '@/assets/InstagramIcon';
import TikTokIcon from '@/assets/TiktokIcon';
import XIcon from '@/assets/XIcon';
import {Box, Flex, Icon, Image, Text} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box background='#4CAD73' py='2rem'>
      <Flex
        pl={{base: '2rem', lg: '4.5rem'}}
        pr={{lg: '7rem'}}
        display={{base: 'block', lg: 'flex'}}
        justifyContent={'space-between'}
      >
        <Box>
          <Image src='/assets/buytoken_logo.png' alt='buytoken logo' />
          <Text
            fontFamily='Poppins'
            fontSize='14px'
            lineHeight='21px'
            w='262px'
            color='rgba(226, 226, 226, 0.886275)'
            mt='2.1rem'
          >
            Block 4, No 7, Winston Churchill Street, Off Jimmy Carter Street,
            Asokoro, Abuja
          </Text>
        </Box>

        <Box mr={{base: '4rem', lg: 0}}>
          <Text
            fontFamily='Raleway'
            fontWeight='700'
            fontSize='18px'
            color='#FFFFFF'
            display={{base: 'none', lg: 'block'}}
          >
            Legal
          </Text>
          {['Terms of Use', 'Privacy Policy'].map((text) => (
            <Text
              fontFamily='Poppins'
              fontSize='14px'
              color='rgba(226, 226, 226, 0.886275)'
              mt='.7rem'
              key={text}
            >
              {text}
            </Text>
          ))}
        </Box>
        <Box>
          <Text
            fontFamily='Raleway'
            fontWeight='700'
            fontSize='18px'
            color='#FFFFFF'
            display={{base: 'none', lg: 'block'}}
          >
            Explore
          </Text>
          {['Press', 'Blog'].map((text) => (
            <Text
              fontFamily='Poppins'
              fontSize='14px'
              color='rgba(226, 226, 226, 0.886275)'
              mt='.7rem'
              key={text}
            >
              {text}
            </Text>
          ))}
        </Box>

        <Box display={{base: 'flex', lg: 'none'}} my={{base: '2.7rem', lg: 0}}>
          <Box mr={{base: '4rem', lg: 0}}>
            <Text
              fontFamily='Raleway'
              fontWeight='700'
              fontSize='18px'
              color='#FFFFFF'
            >
              Legal
            </Text>
            {['Terms of Use', 'Privacy Policy'].map((text) => (
              <Text
                fontFamily='Poppins'
                fontSize='14px'
                color='rgba(226, 226, 226, 0.886275)'
                mt='.7rem'
                key={text}
              >
                {text}
              </Text>
            ))}
          </Box>
          <Box>
            <Text
              fontFamily='Raleway'
              fontWeight='700'
              fontSize='18px'
              color='#FFFFFF'
            >
              Explore
            </Text>
            {['Press', 'Blog'].map((text) => (
              <Text
                fontFamily='Poppins'
                fontSize='14px'
                color='rgba(226, 226, 226, 0.886275)'
                mt='.7rem'
                key={text}
              >
                {text}
              </Text>
            ))}
          </Box>
        </Box>
        <Box>
          <Text
            fontFamily='Raleway'
            fontWeight='700'
            fontSize='18px'
            color='#FFFFFF'
          >
            We are Social
          </Text>
          {[
            {icon: FacebookIcon, name: 'Facebook'},
            {icon: XIcon, name: 'X (formerly twitter)'},
            {icon: InstagramIcon, name: 'Instagram'},
            {icon: TikTokIcon, name: 'TikTok'},
          ].map(({name, icon}) => (
            <Flex key={name} mt='1rem' alignItems={'center'}>
              <Icon as={icon} w='20px' h='20px' mr='.55rem' />
              <Text
                fontFamily='Poppins'
                fontSize='14px'
                color='rgba(226, 226, 226, 0.886275)'
              >
                {name}
              </Text>
            </Flex>
          ))}
        </Box>
      </Flex>
      <Text
        fontFamily='Poppins'
        fontWeight='600'
        fontSize='14px'
        color='#FFFFFF'
        textAlign={'center'}
        w={{base: '294px', lg: '100%'}}
        mx='auto'
        mt={{base: '3rem', lg: '1.5rem'}}
      >
        ©2023 Gention Global Resources Limited. All Rights Reserved
      </Text>
    </Box>
  );
};

export default Footer;
