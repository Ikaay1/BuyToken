import React from 'react';

import {Box} from '@chakra-ui/react';

import Navbar from './Navbar';

const RecentTransaction = ({children}: {children: React.JSX.Element}) => {
  return (
    <Box bg='#FAF9F6'>
      <Navbar />
      <Box px='2rem' h='calc(100vh - 77px)'>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default RecentTransaction;
