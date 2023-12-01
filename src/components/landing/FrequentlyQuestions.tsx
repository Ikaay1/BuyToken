import React, {useState} from 'react';

import AddIcon from '@/assets/AddIcon';
import RemoveIcon from '@/assets/RemoveIcon';
import SmallPlayIcon from '@/assets/SmallPlayIcon';
import {Box, Flex, Icon, Text} from '@chakra-ui/react';

const FrequentlyQuestions = ({index, text}: {index: number; text: string}) => {
  const [show, setShow] = useState(false);
  return (
    <Box
      mt={index !== 0 ? '.7rem' : 0}
      background='#FFFFFF'
      border='1px solid rgba(226, 226, 226, 0.886275)'
    >
      <Flex
        height='56px'
        background='rgba(226, 226, 226, 0.2)'
        borderRadius='5px'
        justifyContent={'space-between'}
        alignItems={'center'}
        px='1.3rem'
      >
        <Text
          fontFamily='Raleway'
          fontWeight='700'
          fontSize='14px'
          color='#4CAD73'
        >
          {text}
        </Text>
        {!show ? (
          <Icon
            as={AddIcon}
            onClick={() => setShow(true)}
            color='#929292'
            cursor='pointer'
          />
        ) : (
          <Icon
            as={RemoveIcon}
            onClick={() => setShow(false)}
            color='#929292'
            cursor='pointer'
          />
        )}
      </Flex>
      {show && (
        <Box px='1rem'>
          <Text
            fontFamily='Poppins'
            fontSize='14px'
            lineHeight='21px'
            color='#929292'
            mt='1.3rem'
          >
            To sign up, click on Register and Kindly fill in your name, email
            address, phone number and password. Your login details will be saved
            for subsequent purchases. So, be sure to use a password you can
            easily remember.
          </Text>
          <Flex alignItems={'center'} mt='1.2rem' mb='.55rem'>
            <Icon as={SmallPlayIcon} w='10px' h='10px' mr='.15rem' />
            <Text
              fontFamily='Raleway'
              fontSize='11px'
              textDecoration='underline'
              color='#929292'
            >
              watch explainer video
            </Text>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default FrequentlyQuestions;
