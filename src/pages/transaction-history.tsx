import React from 'react';

import Sidebar from '@/components/dashboard/Sidebar';
import TransactionHistory from '@/components/transaction-history/TransactionHistory';
import ProtectedRoute from '@/layouts/ProtectedRoute';
import {Box, Flex} from '@chakra-ui/react';

const Home = () => {
  return (
    <ProtectedRoute>
      <Flex h='100vh'>
        <Box display={{base: 'none', lg: 'block'}}>
          <Sidebar />
        </Box>
        <TransactionHistory />
      </Flex>
    </ProtectedRoute>
  );
};

export default Home;
