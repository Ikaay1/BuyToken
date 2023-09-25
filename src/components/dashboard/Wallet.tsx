import React from 'react';

import {Box, Flex} from '@chakra-ui/react';

import Balance from './Balance';

const Wallet = () => {
  return (
    <Box mt='2rem'>
      <Flex justifyContent={'space-between'}>
        <Balance />
      </Flex>
    </Box>
  );
};

export default Wallet;
