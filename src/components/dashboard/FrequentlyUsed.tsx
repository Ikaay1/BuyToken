import React from 'react';

import AddIcon from '@/assets/AddIcon';
import {Box, Flex, Icon, Text} from '@chakra-ui/react';

const FrequentlyUsed = () => {
  return (
    <Box
      width='48%'
      height='223px'
      background='#FFFFFF'
      borderRadius='10px'
      pl='.8rem'
      pr='1.5rem'
      py='.9rem'
      boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
    >
      <Text fontFamily='Inter' fontWeight='500' color='#313131'>
        Frequently used
      </Text>
      <Flex mt='1.6rem' justifyContent={'space-between'}>
        {[1, 2, 3, 4].map((each) => (
          <Flex
            w='23%'
            maxWidth='82.23px'
            height='83.69px'
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
        fontSize='12px'
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
