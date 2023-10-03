import React from 'react';

import {Box} from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';
import Recent from './Recent';

const RecentTransaction = ({children}: {children: React.JSX.Element}) => {
  return (
    <Box bg='#F6F6F6'>
      <Navbar />
      <Box px={{lg: '2rem'}} h='calc(100vh - 77px)'>
        <Box>{children}</Box>
        <Recent />
        <Footer />
      </Box>
    </Box>
  );
};

export default RecentTransaction;
