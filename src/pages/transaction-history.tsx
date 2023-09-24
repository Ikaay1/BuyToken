import React from 'react';

import Sidebar from '@/components/dashboard/Sidebar';
import TransactionHistory from '@/components/transaction-history/TransactionHistory';
import ProtectedRoute from '@/layouts/ProtectedRoute';
import {Flex} from '@chakra-ui/react';

const Home = () => {
  return (
    <ProtectedRoute>
      <Flex h='100vh'>
        <Sidebar />
        <TransactionHistory />
      </Flex>
    </ProtectedRoute>
  );
};

export default Home;
