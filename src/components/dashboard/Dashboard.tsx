import React from 'react';

import {scrollbarStyle} from '@/constants/utils';
import {Box} from '@chakra-ui/react';

import RecentTransaction from './RecentTransaction';
import Wallet from './Wallet';

const Dashboard = () => {
  return (
    <Box
      w={{base: '100%', lg: 'calc(100% - 300px)', mlg: 'calc(100% - 316px)'}}
      maxW={{lg: 'calc(1450px - 300px)', mlg: 'calc(1450px - 316px)'}}
      overflowY={'auto'}
      sx={{lg: scrollbarStyle}}
      bg='#F6F6F6'
    >
      <RecentTransaction>
        <Wallet />
      </RecentTransaction>
    </Box>
  );
};

export default Dashboard;
