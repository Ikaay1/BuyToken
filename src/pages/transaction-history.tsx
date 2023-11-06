import React from 'react';

import Sidebar from '@/components/dashboard/Sidebar';
import TransactionHistory from '@/components/transaction-history/TransactionHistory';
import ProtectedRoute from '@/layouts/ProtectedRoute';
import {Box, Flex} from '@chakra-ui/react';

const Home = () => {
  return (
    <ProtectedRoute>
      <Box bg='white'>
        <Flex h='100vh' maxW='1445px' mx='auto'>
          <Box display={{base: 'none', lg: 'block'}}>
            <Sidebar />
          </Box>
          <TransactionHistory />
        </Flex>
      </Box>
    </ProtectedRoute>
  );
};

export default Home;
export {getServerSideProps} from '../components/widgets/Chakra';
