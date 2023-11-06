import React from 'react';

import Sidebar from '@/components/dashboard/Sidebar';
import Profile from '@/components/profile/Profile';
import Utility from '@/components/utility/Utility';
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
          <Profile />
        </Flex>
      </Box>
    </ProtectedRoute>
  );
};

export default Home;
export {getServerSideProps} from '../components/widgets/Chakra';
