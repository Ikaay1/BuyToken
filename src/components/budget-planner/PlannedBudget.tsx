import React from 'react';

import {ExpensesInterface, PlannedInterface} from '@/constants/interface';
import {Box, Flex, Text} from '@chakra-ui/react';

import ChartData from './ChartData';

const PlannedBudget = ({
  planned,
  expenses,
}: {
  planned: PlannedInterface;
  expenses: ExpensesInterface;
}) => {
  return (
    <Box
      borderRadius='16px'
      bg='#FFFFFF'
      pt='1.4rem'
      pb={{base: '3.2rem', lg: '1.1rem'}}
      mt='1.25rem'
      mx={{base: '.5rem', lg: 0}}
      px={{base: '.8rem', lg: '3.8rem'}}
    >
      <Text
        fontFamily='Raleway'
        fontWeight='700'
        fontSize={{lg: '20px'}}
        color='#000000'
        textAlign={{lg: 'center'}}
      >
        Visualize Your Financial Journey 📊
      </Text>
      <Text
        width={{lg: '821px'}}
        fontFamily='Poppins'
        fontSize='14px'
        lineHeight='21px'
        textAlign={{lg: 'center'}}
        mx='auto'
        color='#000000'
        mt='.7rem'
      >
        Stay in the know with BuyToken&apos;s SmartSpend. Watch the % of your
        budget unfold in real-time for electricity, airtime, and data. Your
        financial clarity begins here!
      </Text>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        mt='2.5rem'
        maxWidth={{lg: '850px', mlg: '100%'}}
        mb='8rem'
        display={{base: 'block', lg: 'flex'}}
      >
        <ChartData planned={planned} expenses={expenses} />
      </Flex>
    </Box>
  );
};

export default PlannedBudget;
