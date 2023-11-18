import React from 'react';

import {scrollbarStyle} from '@/constants/utils';
import {useGetBudgetsQuery} from '@/redux/services/budget.service';
import {Box, Skeleton} from '@chakra-ui/react';

import Footer from '../dashboard/Footer';
import Navbar from '../dashboard/Navbar';
import BudgetPlanner from './BudgetPlanner';
import PlannedBudget from './PlannedBudget';

const Budget = () => {
  const {data, isFetching} = useGetBudgetsQuery('');
  console.log('budget', data);
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
        {isFetching ? (
          <Skeleton
            w='100%'
            h='100%'
            borderRadius='16px'
            mt='1.25rem'
          ></Skeleton>
        ) : !data ? (
          <Box></Box>
        ) : !data?.data?.planner?.electricity ? (
          <BudgetPlanner />
        ) : (
          <PlannedBudget
            planned={data?.data?.planner}
            expenses={data?.data?.trans}
          />
        )}

        <Footer />
      </Box>
    </Box>
  );
};

export default Budget;
