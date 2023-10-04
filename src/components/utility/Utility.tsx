import React from 'react';

import {scrollbarStyle} from '@/constants/utils';
import {Box} from '@chakra-ui/react';

import Footer from '../dashboard/Footer';
import Navbar from '../dashboard/Navbar';
import UtilityServices from './UtilityServices';

const Utility = () => {
  return (
    <Box
      w={{base: '100%', lg: 'calc(100% - 300px)', mlg: 'calc(100% - 316px)'}}
      maxW={{lg: 'calc(1450px - 300px)', mlg: 'calc(1450px - 316px)'}}
      overflowY={'auto'}
      sx={{lg: scrollbarStyle}}
      bg='#F6F6F6'
    >
      <Navbar />
      <Box px={{lg: '2rem'}} h='calc(100vh - 77px)'>
        <UtilityServices />
        <Footer />
      </Box>
    </Box>
  );
};

export default Utility;
