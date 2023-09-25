import React from 'react';

import Sidebar from '@/components/dashboard/Sidebar';
import Utility from '@/components/utility/Utility';
import ProtectedRoute from '@/layouts/ProtectedRoute';
import {Flex} from '@chakra-ui/react';

const Home = () => {
  return (
    <ProtectedRoute>
      <Flex h='100vh'>
        <Sidebar />
        <Utility />
      </Flex>
    </ProtectedRoute>
  );
};

export default Home;
