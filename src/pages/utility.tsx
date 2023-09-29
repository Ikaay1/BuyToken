import React from 'react';

import Sidebar from '@/components/dashboard/Sidebar';
import Utility from '@/components/utility/Utility';
import ProtectedRoute from '@/layouts/ProtectedRoute';
import {Box, Flex} from '@chakra-ui/react';

const Home = () => {
  return (
    <ProtectedRoute>
      <Flex h='100vh'>
        <Box display={{base: 'none', lg: 'block'}}>
          <Sidebar />
        </Box>
        <Utility />
      </Flex>
    </ProtectedRoute>
  );
};

export default Home;
