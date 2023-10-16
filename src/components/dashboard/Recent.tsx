import React from 'react';

import InflowIcon from '@/assets/InflowIcon';
import RightVector from '@/assets/RightVector';
import {TransactionInterface} from '@/constants/interface';
import {scrollbarStyle, scrollbarStyle2} from '@/constants/utils';
import {useGetRecentTransactionsQuery} from '@/redux/services/transactions.service';
import {
  Box,
  Divider,
  Flex,
  Icon,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import EachTransactionModalDesktop from '../transaction-history/EachTransactionModalDesktop';
import EachTransactionModalMobile from '../transaction-history/EachTransactionModalMobile';
import TransactionEmptyState from './TransactionEmptyState';

const Recent = () => {
  const {data, isFetching} = useGetRecentTransactionsQuery('');
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

      {isFetching ? (
        <Skeleton
          mt={{base: '1.2rem', lg: '.6rem'}}
          w='100%'
          h={{base: '250px', lg: '400px'}}
        ></Skeleton>
      ) : !data ? (
        <TransactionEmptyState text='Oops... Something went wrong' />
      ) : !data?.transactions?.length ? (
        <TransactionEmptyState
          text="You haven't made any transactions yet. When you do, they'll
        appear here"
        />
      ) : (
        <>
          {/* Desktop */}
          <TableContainer
            sx={scrollbarStyle2}
            mt='.6rem'
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
                {data?.transactions?.map((each: TransactionInterface) => (
                  <EachTransactionModalDesktop
                    eachTransaction={each}
                    key={each._id}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          {/* Mobile */}
          <Box px='.7rem' mt='1.2rem' display={{lg: 'none'}}>
            {data?.transactions?.map((each: TransactionInterface) => (
              <EachTransactionModalMobile
                key={each._id}
                eachTransaction={each}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Recent;
