import React from 'react';

import ClockIcon from '@/assets/ClockIcon';
import NairaIcon from '@/assets/NairaIcon';
import NoCardIcon from '@/assets/NoCardIcon';
import NoPhoneIcon from '@/assets/NoPhoneIcon';
import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box
      bg='white'
      pt={{base: '8rem', lg: '11rem'}}
      pb={{base: '3rem', lg: '5rem'}}
    >
      <Flex w={{lg: '1138px'}} maxW={{base: '500px', lg: '1138px'}} mx='auto'>
        <Flex
          w={{base: '60%', lg: '806px'}}
          background='#417657'
          boxShadow='0px 10px 20px 3px rgba(0, 0, 0, 0.1)'
          pl={{base: '1rem', lg: '3rem'}}
          alignItems={'center'}
        >
          <Box w={{lg: '641px'}}>
            <Text
              fontFamily='Inter'
              fontSize={{base: '14px', lg: '24px'}}
              color='#FFFFFF'
            >
              Save ₦100 On Bill Payments When You Transfer Directly To Your
              Meter Or Decoder’s Bank Account.
            </Text>
            <Text
              fontFamily='Raleway'
              fontStyle='normal'
              fontWeight='700'
              fontSize={{base: '16px', lg: '40px'}}
              color='#FFFFFF'
              mt={{base: '1rem', lg: '1.6rem'}}
              lineHeight={{lg: '100%'}}
            >
              Get instant value!
            </Text>
          </Box>
        </Flex>
        <Image
          w={{base: '40%', lg: '332px'}}
          h={{base: '173px', lg: 'auto'}}
          src='/assets/woman.png'
          objectFit={{base: 'cover', lg: 'fill'}}
          alt='Woman'
        />
      </Flex>

      <Box
        w={{lg: '854px'}}
        maxW={{base: '500px', lg: '854px'}}
        mx='auto'
        mt={{base: '3.3rem', lg: '4.6rem'}}
        px={{base: '.5rem', lg: 0}}
      >
        <Text
          w={{lg: '789px'}}
          mx='auto'
          fontFamily='Inter'
          fontSize={{base: '10px', lg: '32px'}}
          lineHeight={{lg: '39px'}}
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
                w={{base: '48%', lg: i === 1 ? '353px' : '319.51px'}}
                justifyContent={{lg: 'space-between'}}
                alignItems={'center'}
                key={name}
              >
                <Icon
                  w={{base: '55px', lg: '103.29px'}}
                  h={{base: '65px', lg: '122.07px'}}
                  mr={{base: '.6rem', lg: 0}}
                  as={icon}
                />
                <Text
                  w={{lg: i === 1 ? '215px' : '182px'}}
                  fontFamily='Inter'
                  fontSize={{base: '12px', lg: '20px'}}
                  lineHeight={{lg: '24px'}}
                  color='#666666'
                >
                  {name}
                </Text>
              </Flex>
            ))}
          </Flex>
          <Flex
            justifyContent={'space-between'}
            mt={{base: '1.5rem', lg: '3rem'}}
          >
            {[
              {icon: NoCardIcon, name: 'No Card Exposure'},
              {
                icon: NoPhoneIcon,
                name: 'No App. No Website, Just one bank transfer',
              },
            ].map(({icon, name}, i) => (
              <Flex
                w={{base: '48%', lg: i === 1 ? '353px' : '319.51px'}}
                justifyContent={{lg: 'space-between'}}
                alignItems={'center'}
                key={name}
              >
                <Icon
                  w={{base: '55px', lg: '103.29px'}}
                  h={{base: '65px', lg: '122.07px'}}
                  mr={{base: '.6rem', lg: 0}}
                  as={icon}
                />
                <Text
                  w={{lg: i === 1 ? '215px' : '182px'}}
                  fontFamily='Inter'
                  fontSize={{base: '12px', lg: '20px'}}
                  lineHeight={{lg: '24px'}}
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
