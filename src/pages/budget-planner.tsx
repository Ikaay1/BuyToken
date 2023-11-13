import React from 'react';

import Budget from '@/components/budget-planner/Budget';
import Sidebar from '@/components/dashboard/Sidebar';
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
          <Budget />
        </Flex>
      </Box>
    </ProtectedRoute>
  );
};

export default Home;
export {getServerSideProps} from '../components/widgets/Chakra';
