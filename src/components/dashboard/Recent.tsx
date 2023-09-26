import React from 'react';

import InflowIcon from '@/assets/InflowIcon';
import OutflowIcon from '@/assets/OutflowIcon';
import RightVector from '@/assets/RightVector';
import {scrollbarStyle, scrollbarStyle2} from '@/constants/utils';
import {
  Box,
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

const Recent = () => {
  return (
    <Box
      h='599px'
      borderRadius='16px'
      overflowY={'auto'}
      sx={scrollbarStyle}
      bg='#FFFFFF'
      pl='.9rem'
      pt='1rem'
      pb='1.5rem'
      mt='1.25rem'
    >
      <Flex pr='1rem' justifyContent={'space-between'}>
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
      <TableContainer mt='1.7rem' sx={scrollbarStyle2}>
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
                    fontFamily='Lato'
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
    </Box>
  );
};

export default Recent;
