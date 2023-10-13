import React from 'react';

import InflowIcon from '@/assets/InflowIcon';
import RightVector from '@/assets/RightVector';
import {scrollbarStyle, scrollbarStyle2} from '@/constants/utils';
import {
  Box,
  Divider,
  Flex,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import TransactionEmptyState from './TransactionEmptyState';

const Recent = () => {
  return (
    <Box
      minH={{base: '285px', lg: '599px'}}
      maxH={{base: '599px', lg: '599px'}}
      borderRadius='16px'
      overflowY={'auto'}
      sx={scrollbarStyle}
      bg='#FFFFFF'
      pl='.9rem'
      pr={{base: '.9rem', lg: 0}}
      pt='1rem'
      pb='1.5rem'
      mt='1.25rem'
    >
      <Flex
        pr={{lg: '1rem'}}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text
          fontFamily='Raleway'
          fontWeight='700'
          fontSize='20px'
          color='#313131'
        >
          Recent Transactions
        </Text>
        <Flex alignItems={'center'}>
          <Text
            fontFamily='Raleway'
            fontWeight='500'
            fontSize='14px'
            color='#929292'
            mr='.5rem'
          >
            View all
          </Text>
          <Icon width='7.41px' height='12px' as={RightVector} />
        </Flex>
      </Flex>

      {/* Desktop */}
      <TableContainer
        mt='1.7rem'
        sx={scrollbarStyle2}
        display={{base: 'none', lg: 'block'}}
      >
        <Table variant='simple'>
          <Thead>
            <Tr>
              {[
                '',
                'Description',
                'Amount',
                'Transaction Ref.',
                'Type',
                'Date',
                'Status',
              ].map((each) => (
                <Th
                  fontFamily='Inter'
                  fontSize='14px'
                  color='#313131'
                  key={each}
                  textTransform={'capitalize'}
                >
                  {each}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {[1, 2, 3, 4, 5, 6, 7].map((each) => (
              <Tr key={each}>
                <Td>
                  <Flex
                    width='30.71px'
                    height='30px'
                    background='#F5F5F5'
                    boxShadow='0px 0px 4px rgba(0, 0, 0, 0.15)'
                    borderRadius='50px'
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Icon
                      as={InflowIcon}
                      //   as={OutflowIcon}
                    />
                  </Flex>
                </Td>
                {[
                  'Funded wallet',
                  '₦9,900.00',
                  '56287W78E8E8W8W',
                  'Funding',
                  '19th Sep, 2023',
                ].map((each) => (
                  <Td
                    fontFamily='Inter'
                    fontSize='14px'
                    color='#929292'
                    key={each}
                  >
                    {each}
                  </Td>
                ))}
                <Td>
                  <Text
                    width='70px'
                    height='27px'
                    background='#F4FCF7'
                    //   background='#C20B0B'
                    //   background='#E6CBB3'
                    borderRadius='1000px'
                    fontFamily='Inter'
                    fontSize='14px'
                    color='#417657'
                    //   color='#FFFFFF'
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    Success
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Mobile */}
      <Box px='.7rem' mt='1.2rem' display={{lg: 'none'}}>
        {[1, 2, 3].map((each) => (
          <Box mt='.8rem' key={each}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Flex alignItems={'center'}>
                <Flex
                  width='26px'
                  height='26px'
                  background='#F5F5F5'
                  boxShadow='0px 0px 4px rgba(0, 0, 0, 0.15)'
                  borderRadius='50px'
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Icon
                    as={InflowIcon}
                    //   as={OutflowIcon}
                    w='18px'
                    h='18px'
                  />
                </Flex>
                <Text
                  w='102px'
                  fontFamily='Inter'
                  fontSize='13px'
                  lineHeight='30px'
                  color='#929292'
                >
                  56287W78E8E...
                </Text>
              </Flex>
              <Text fontFamily='Inter' fontWeight='600' color='#313131'>
                ₦9,900.00
              </Text>
            </Flex>
            <Flex
              alignItems={'center'}
              justifyContent={'space-between'}
              mt='.5rem'
            >
              <Text
                fontFamily='Inter'
                fontWeight='500'
                fontSize='14px'
                color='#606060'
              >
                Funded wallet
              </Text>
              <Text fontFamily='Inter' fontSize='14px' color='#929292'>
                Funding
              </Text>
            </Flex>
            <Flex
              alignItems={'center'}
              justifyContent={'space-between'}
              mt='.5rem'
            >
              <Text fontFamily='Inter' fontSize='13px' color='#929292'>
                19th Sep, 2023
              </Text>
              <Text
                width='69px'
                height='25px'
                background='#F4FCF7'
                //   background='#C20B0B'
                //   background='#E6CBB3'
                borderRadius='100px'
                fontFamily='Inter'
                fontSize='14px'
                color='#417657'
                //   color='#FFFFFF'
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                Success
              </Text>
            </Flex>
            <Divider mt='.6rem' width='100%' border='1px solid #E9EFF5' />
          </Box>
        ))}
      </Box>
      {/* <TransactionEmptyState
        text="You haven't made any transactions yet. When you do, they'll
        appear here"
      /> */}
    </Box>
  );
};

export default Recent;
