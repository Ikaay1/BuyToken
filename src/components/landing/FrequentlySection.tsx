import React from 'react';

import AddIcon from '@/assets/AddIcon';
import {Box, Flex, Icon, Text} from '@chakra-ui/react';

import FrequentlyQuestions from './FrequentlyQuestions';

const FrequentlySection = () => {
  return (
    <Box px='6.5rem' pt='2.5rem'>
      <Text
        fontFamily='Raleway'
        fontWeight='600'
        fontSize='30px'
        color='#000000'
        textAlign={'center'}
      >
        Frequently Asked Questions
      </Text>
      <Box pt='3.5rem' pb='5rem'>
        <Text fontFamily='Raleway' fontWeight='600' color='#929292'>
          My Account
        </Text>
        <Box>
          {[
            'How to Signup to an account',
            'How to Reset my password',
            'How to Login to my account',
          ].map((each, i) => (
            <FrequentlyQuestions key={each} index={i} text={each} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FrequentlySection;
