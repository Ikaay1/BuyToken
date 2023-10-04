import React from 'react';

import AddIcon from '@/assets/AddIcon';
import {Box, Flex, Icon, Text} from '@chakra-ui/react';

import EditUtilities from './EditUtilities';

const FrequentlyUsed = () => {
  return (
    <Box
      width={{lg: '48%'}}
      height={{lg: '223px'}}
      background='#FFFFFF'
      borderRadius={{lg: '10px'}}
      pl='.8rem'
      pr='1.5rem'
      py={{base: '1.3rem', lg: '.9rem'}}
      mt={{base: '1.45rem', lg: 0}}
    >
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Text
          fontSize={{base: '14px', lg: '16px'}}
          fontFamily='Inter'
          fontWeight='500'
          color='#313131'
        >
          Frequently used
        </Text>
        <EditUtilities />
      </Flex>
      <Flex mt='1.6rem' justifyContent={'space-between'}>
        {[1, 2, 3, 4].map((each) => (
          <Flex
            w={{base: '21%', lg: '23%'}}
            maxWidth='82.23px'
            height={{base: '75px', md: '83.69px'}}
            background='#F5F5F5'
            borderRadius='4.70398px'
            justifyContent={'center'}
            alignItems={'center'}
            key={each}
          >
            <Icon as={AddIcon} />
          </Flex>
        ))}
      </Flex>
      <Text
        width='339px'
        fontFamily='Inter'
        fontWeight='500'
        fontSize={{base: '11px', lg: '12px'}}
        lineHeight='170%'
        textAlign='center'
        color='#929292'
        mx='auto'
        mt='.7rem'
      >
        Click on the each card to add 4 of your frequently used utility bill
        payments here for quick and easy access
      </Text>
    </Box>
  );
};

export default FrequentlyUsed;
