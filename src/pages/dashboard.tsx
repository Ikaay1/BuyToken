import React from 'react';

import Dashboard from '@/components/dashboard/Dashboard';
import Sidebar from '@/components/dashboard/Sidebar';
import ProtectedRoute from '@/layouts/ProtectedRoute';
import {Box, Flex} from '@chakra-ui/react';

const Home = () => {
  return (
    <ProtectedRoute>
      <Flex h='100vh'>
        <Sidebar />
        <Dashboard />
      </Flex>
    </ProtectedRoute>
  );
};

export default Home;
