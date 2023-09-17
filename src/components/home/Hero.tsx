import React from 'react';

import ClockIcon from '@/assets/ClockIcon';
import NairaIcon from '@/assets/NairaIcon';
import NoCardIcon from '@/assets/NoCardIcon';
import NoPhoneIcon from '@/assets/NoPhoneIcon';
import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box bg='white' pt='11rem' pb='5rem'>
      <Flex w='1138px' mx='auto'>
        <Flex
          w='806px'
          background='#417657'
          boxShadow='0px 10px 20px 3px rgba(0, 0, 0, 0.1)'
          pl='3rem'
          alignItems={'center'}
        >
          <Box w='641px'>
            <Text fontFamily='Inter' fontSize='24px' color='#FFFFFF'>
              Save ₦100 On Bill Payments When You Transfer Directly To Your
              Meter Or Decoder’s Bank Account.
            </Text>
            <Text
              fontFamily='Raleway'
              fontStyle='normal'
              fontWeight='700'
              fontSize='40px'
              color='#FFFFFF'
              mt='1.6rem'
              lineHeight={'100%'}
            >
              Get instant value!
            </Text>
          </Box>
        </Flex>
        <Image w='332px' src='/assets/woman.png' alt='Woman' />
      </Flex>

      <Box w='854px' mx='auto' mt='4.6rem'>
        <Text
          w='789px'
          mx='auto'
          fontFamily='Inter'
          fontSize='32px'
          lineHeight='39px'
          textAlign='center'
          color='#000000'
        >
          *Make a bank transfer to the account to buy tokens or renew your cable
          subscription instantly
        </Text>
        <Box mt='2.8rem'>
          <Flex justifyContent={'space-between'}>
            {[
              {icon: NairaIcon, name: 'No Convenience Fee'},
              {icon: ClockIcon, name: '60 Second turnaround time'},
            ].map(({icon, name}, i) => (
              <Flex
                w={i === 1 ? '353px' : '319.51px'}
                justifyContent={'space-between'}
                alignItems={'center'}
                key={name}
              >
                <Icon w='103.29px' h='122.07px' as={icon} />
                <Text
                  w={i === 1 ? '215px' : '182px'}
                  fontFamily='Inter'
                  fontSize='20px'
                  lineHeight='24px'
                  color='#666666'
                >
                  {name}
                </Text>
              </Flex>
            ))}
          </Flex>
          <Flex justifyContent={'space-between'} mt='3rem'>
            {[
              {icon: NoCardIcon, name: 'No Card Exposure'},
              {
                icon: NoPhoneIcon,
                name: 'No App. No Website, Just one bank transfer',
              },
            ].map(({icon, name}, i) => (
              <Flex
                w={i === 1 ? '353px' : '319.51px'}
                justifyContent={'space-between'}
                alignItems={'center'}
                key={name}
              >
                <Icon w='103.29px' h='122.07px' as={icon} />
                <Text
                  w={i === 1 ? '215px' : '182px'}
                  fontFamily='Inter'
                  fontSize='20px'
                  lineHeight='24px'
                  color='#666666'
                >
                  {name}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
