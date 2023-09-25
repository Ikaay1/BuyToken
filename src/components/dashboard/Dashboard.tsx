import React from 'react';

import {Box} from '@chakra-ui/react';

import RecentTransaction from './RecentTransaction';
import Wallet from './Wallet';

const Dashboard = () => {
  return (
    <Box w={{base: 'calc(100% - 300px)', mlg: 'calc(100% - 316px)'}}>
      <RecentTransaction>
        <Wallet />
      </RecentTransaction>
    </Box>
  );
};

export default Dashboard;
