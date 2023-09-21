import React from 'react';

import ProtectedRoute from '@/layouts/ProtectedRoute';
import { Box } from '@chakra-ui/react';

const home = () => {
  return (
    <ProtectedRoute>
      <Box>Home</Box>
    </ProtectedRoute>
  );
};

export default home;
