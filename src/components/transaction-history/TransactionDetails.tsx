import React from 'react';

import CloseIcon from '@/assets/CloseIcon';
import {TransactionInterface} from '@/constants/interface';
import {Box, Flex, Icon, Text} from '@chakra-ui/react';

const TransactionDetails = ({
  onClose,
  eachTransaction,
}: {
  onClose: () => void;
  eachTransaction: TransactionInterface;
}) => {
  function formatAMPM(date: any) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

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
              value1: eachTransaction?.refNumber,
              value2: `${formatAMPM(
                new Date(eachTransaction?.createdAt),
              )}, ${new Date(eachTransaction?.createdAt)
                .toString()
                .slice(0, 15)}`,
            },
            {
              header1: 'Amount',
              header2: 'Type',
              value1: `₦${eachTransaction?.amount?.toLocaleString()}`,
              value2:
                eachTransaction?.billerType[0]?.toUpperCase() +
                eachTransaction?.billerType.slice(1),
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
              {eachTransaction?.description}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionDetails;
