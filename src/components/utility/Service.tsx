import React from 'react';

import BulbIcon from '@/assets/BulbIcon';
import ComputerIcon from '@/assets/ComputerIcon';
import DummyIcon from '@/assets/DummyIcon';
import InternetIcon from '@/assets/InternetIcon';
import PhoneIcon from '@/assets/PhoneIcon';
import {Box, Button, Flex, Icon, Image, Text} from '@chakra-ui/react';

const Service = ({
  setState,
  setProvider,
}: {
  setState: React.Dispatch<React.SetStateAction<string>>;
  setProvider: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Box pl={{lg: '2.5rem', mlg: '3.5rem'}} mt={{base: '2.4rem', lg: '1.9rem'}}>
      <Flex w={{base: '100%', lg: '448px'}} justifyContent={'space-between'}>
        {[
          {icon: BulbIcon, name: 'Electricity'},
          {icon: PhoneIcon, name: 'Airtime'},
          {icon: ComputerIcon, name: 'Cable TV'},
          {icon: InternetIcon, name: 'Internet'},
        ].map(({icon, name}) => (
          <Box key={name} w={{base: '20%', lg: 'auto'}}>
            <Flex
              width={{base: '100%', lg: '82.23px'}}
              height={{base: '68.35px', lg: '83.69px'}}
              background='#DBEFE3'
              borderRadius='4.70398px'
              justifyContent={'center'}
              alignItems={'center'}
              onClick={() => {
                setState('Provider');
                if (name === 'Electricity') {
                  setProvider('Electricity');
                } else if (name === 'Airtime') {
                  setProvider('Airtime');
                }
              }}
              cursor='pointer'
            >
              <Icon
                as={icon}
                w={{base: '14.17px', lg: '28.78px'}}
                h={{base: '20px', lg: '41.84px'}}
              />
            </Flex>
            <Text
              fontFamily='Poppins'
              fontSize={{base: '12px', lg: '13px'}}
              textAlign='center'
              color='#313131'
              mt='.5rem'
            >
              {name}
            </Text>
          </Box>
        ))}
      </Flex>
      <Flex display='block' mt={{base: '3rem', lg: '4rem'}}>
        <Box h='100%' py='.7rem' background='#417657'>
          <Text
            fontFamily='Poppins'
            fontSize='14px'
            color='#FFFFFF'
            w='300px'
            mx='auto'
          >
            Are you out of Electricity Units and Cash? We’ve got you covered.
            Try{' '}
            <Box
              as='span'
              fontFamily='Raleway'
              fontWeight='700'
              fontSize='14px'
              color='#FFFFFF'
            >
              BORROW NOW!
            </Box>
          </Text>
          <Flex justifyContent={'center'} mt='.95rem'>
            <Icon as={DummyIcon} width='48.71px' height='8.14px' />
          </Flex>
          <Flex justifyContent={'center'} mt='.7rem'>
            <Button
              width='160px'
              height='28px'
              background='#F3F3F3'
              boxShadow='0px 24.2056px 48.4112px 7.26168px rgba(0, 0, 0, 0.1)'
              borderRadius='5px'
              fontFamily='Raleway'
              fontWeight='500'
              fontSize='14px'
              color='#417657'
            >
              Get Started!
            </Button>
          </Flex>
        </Box>
        <Image
          w='100%'
          h='154px'
          objectFit={'cover'}
          src='/assets/man.jpg'
          alt='Man'
        />
      </Flex>
    </Box>
  );
};

export default Service;
