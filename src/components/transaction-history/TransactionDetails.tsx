import React from 'react';

import CloseIcon from '@/assets/CloseIcon';
import {Box, Flex, Icon, Text} from '@chakra-ui/react';

const TransactionDetails = ({onClose}: {onClose: () => void}) => {
  return (
    <Box
      width={{base: '100%', lg: '441px'}}
      background='#FFFFFF'
      borderRadius='10px'
      pt='1.3rem'
      pb='3rem'
    >
      <Flex justifyContent={'flex-end'} pr='1.3rem'>
        <Icon
          onClick={onClose}
          as={CloseIcon}
          width={'14px'}
          height={'14px'}
          cursor='pointer'
        />
      </Flex>
      <Text
        fontFamily='Inter'
        fontWeight='500'
        fontSize='20px'
        color='#000000'
        textAlign={'center'}
        mt='1rem'
      >
        Transaction Details
      </Text>
      <Box pl={{base: '1.3rem', lg: '3.5rem'}} pr='1.1rem'>
        <Box w='350px'>
          {[
            {
              header1: 'Reference No.',
              header2: 'Date',
              value1: 'AI10D84JJY5',
              value2: '22nd August, 2023',
            },
            {
              header1: 'Amount',
              header2: 'Type',
              value1: '₦20,000',
              value2: 'Data',
            },
          ].map(({header1, header2, value1, value2}) => (
            <Box key={header1} mt='.9rem'>
              <Flex>
                <Text
                  fontFamily='Poppins'
                  fontWeight='500'
                  fontSize='13px'
                  color='#313131'
                  w='99px'
                  mr='4.5rem'
                >
                  {header1}
                </Text>
                <Text
                  fontFamily='Poppins'
                  fontWeight='500'
                  fontSize='13px'
                  color='#313131'
                >
                  {header2}
                </Text>
              </Flex>
              <Flex mt='.21rem'>
                <Text
                  fontFamily='Poppins'
                  fontWeight='300'
                  fontSize='13px'
                  color='#313131'
                  w='99px'
                  mr='4.5rem'
                >
                  {value1}
                </Text>
                <Text
                  fontFamily='Poppins'
                  fontWeight='300'
                  fontSize='13px'
                  color='#313131'
                >
                  {value2}
                </Text>
              </Flex>
            </Box>
          ))}
          <Box mt='.9rem'>
            <Text
              fontFamily='Poppins'
              fontWeight='500'
              fontSize='13px'
              color='#313131'
            >
              Description
            </Text>
            <Text
              fontFamily='Poppins'
              fontWeight='300'
              fontSize='13px'
              color='#313131'
              lineHeight={'20px'}
            >
              Internet data recharge for mobile number 123-456-7890
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionDetails;
