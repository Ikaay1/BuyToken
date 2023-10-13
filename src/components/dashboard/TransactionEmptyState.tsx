import React from 'react';

import EmptyTransactionIcon from '@/assets/EmptyTransactionIcon';
import {Box, Flex, Icon, Text} from '@chakra-ui/react';

const TransactionEmptyState = ({text}: {text: string}) => {
  return (
    <Box mt={{base: '3.5rem', lg: '5.5rem'}}>
      <Flex justifyContent={'center'}>
        <Icon
          as={EmptyTransactionIcon}
          w={{base: '37px', lg: '67px'}}
          h={{base: '37px', lg: '67px'}}
        />
      </Flex>
      <Text
        width='260px'
        fontFamily="'Inter'"
        fontSize={{base: '13px', lg: '14px'}}
        lineHeight='20px'
        textAlign='center'
        color='#929292'
        mx='auto'
        mt='.85rem'
      >
        {text}
      </Text>
    </Box>
  );
};

export default TransactionEmptyState;
