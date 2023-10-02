import React from 'react';

import {scrollbarStyle} from '@/constants/utils';
import {Box} from '@chakra-ui/react';

import Footer from '../dashboard/Footer';
import Navbar from '../dashboard/Navbar';
import TransactHistory from './TransactHistory';

const TransactionHistory = () => {
  return (
    <Box
      w={{base: '100%', lg: 'calc(100% - 300px)', mlg: 'calc(100% - 316px)'}}
      overflowY={'auto'}
      sx={{lg: scrollbarStyle}}
      bg='#FAF9F6'
    >
      <Navbar />
      <Box px={{lg: '2rem'}} h='calc(100vh - 77px)'>
        <TransactHistory />
        <Footer />
      </Box>
    </Box>
  );
};

export default TransactionHistory;
