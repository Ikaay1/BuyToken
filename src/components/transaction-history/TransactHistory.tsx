import React from 'react';

import InflowIcon from '@/assets/InflowIcon';
import {scrollbarStyle, scrollbarStyle2} from '@/constants/utils';
import {
  Box,
  Divider,
  Flex,
  Icon,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import EachTransactionModalDesktop from './EachTransactionModalDesktop';
import EachTransactionModalMobile from './EachTransactionModalMobile';
import Paginate from './Paginate';

const TransactHistory = () => {
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
      <Flex alignItems={'center'}>
        <Text
          fontFamily='Raleway'
          fontWeight='700'
          fontSize={{lg: '20px'}}
          color='#313131'
          mr='.5rem'
        >
          Transaction History
        </Text>
        <Text
          background='#F4FCF7'
          borderRadius='1000px'
          fontFamily='Inter'
          fontSize={{base: '12px', lg: '14px'}}
          color='#417657'
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          px='.6rem'
        >
          19 transactions
        </Text>
      </Flex>

      <Flex
        border='1px solid #E2E2E2'
        borderRadius='5px'
        py='1.1rem'
        px={{base: '1rem', lg: 0}}
        pl={{lg: '2.2rem'}}
        mt='.5rem'
      >
        <Select
          width='89px'
          height='36px'
          background='#FFFFFF'
          border='1px solid #D9D9D9'
          borderRadius='5px'
          fontFamily='Lato'
          fontSize='14px'
          color='#575757'
          placeholder='Status'
          mr='.65rem'
        >
          {['Success', 'Pending', 'Failed'].map((each) => (
            <option key={each}>{each}</option>
          ))}
        </Select>
        <Select
          width='80px'
          height='36px'
          background='#FFFFFF'
          border='1px solid #D9D9D9'
          borderRadius='5px'
          fontFamily='Lato'
          fontSize='14px'
          color='#575757'
          placeholder='Type'
          mr='.65rem'
        >
          {['Funding', 'Electricity', 'Data', 'Airtime', 'Borrow'].map(
            (each) => (
              <option key={each}>{each}</option>
            ),
          )}
        </Select>
        <Input
          variant='filled'
          placeholder={`Date`}
          max={new Date().toISOString().slice(0, 10)}
          type={'Date'}
          width='84px'
          height='36px'
          background='#FFFFFF'
          border='1px solid #D9D9D9'
          borderRadius='5px'
          fontFamily='Lato'
          fontSize='14px'
          color='#575757'
          onChange={(e) => console.log(e.target.value)}
        />
      </Flex>

      {/* Desktop */}
      <TableContainer
        mt='.6rem'
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
              <EachTransactionModalDesktop key={each} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Mobile */}
      <Box px='.7rem' mt='1.2rem' display={{lg: 'none'}}>
        {[1, 2, 3].map((each) => (
          <EachTransactionModalMobile key={each} />
        ))}
      </Box>
      {/* <Box mt={{base: '3.5rem', lg: '5.5rem'}}>
        <Flex justifyContent={'center'}>
          <Icon
            as={EmptyTransactionIcon}
            w={{base: '37px', lg: '67px'}}
            h={{base: '37px', lg: '67px'}}
          />
        </Flex>
        <Text
          width='260px'
          fontFamily="'Inter'"
          fontSize={{base: '13px', lg: '14px'}}
          lineHeight='20px'
          textAlign='center'
          color='#929292'
          mx='auto'
          mt='.85rem'
        >
          You haven&apos;t made any transactions yet. When you do, they&apos;ll
          appear here
        </Text>
      </Box> */}
      <Paginate />
    </Box>
  );
};

export default TransactHistory;
