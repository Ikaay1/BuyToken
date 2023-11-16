import React from 'react';

import {Box, Flex, Image, Text} from '@chakra-ui/react';

import BudgetForm from './BudgetForm';

const BudgetPlanner = () => {
  return (
    <Box
      borderRadius='16px'
      bg='#FFFFFF'
      pt='1.4rem'
      pb={{base: '3.2rem', lg: '1.1rem'}}
      mt='1.25rem'
      mx={{base: '.5rem', lg: 0}}
      px={{base: '1rem', lg: '3.8rem'}}
    >
      <Text
        fontFamily='Raleway'
        fontWeight='700'
        fontSize='20px'
        color='#000000'
        textAlign={'center'}
      >
        Craft Your Budget, Your Way 🎯
      </Text>
      <Text
        width='566px'
        fontFamily='Poppins'
        fontSize='14px'
        lineHeight='21px'
        textAlign='center'
        mx='auto'
        color='#000000'
        mt='.7rem'
      >
        Customize your utility budgets effortlessly. Simply enter your preferred
        spending for electricity, airtime, and data. BuyToken&apos;s SmartSpend
        Planner puts financial control at your fingertips.
      </Text>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        mt='2.1rem'
        mb='8rem'
        maxWidth={{lg: '850px', mlg: '100%'}}
      >
        <Box w={{lg: '455px', mlg: '516px'}}>
          {/* <Text
            fontFamily='Raleway'
            fontWeight='700'
            fontSize='18px'
            lineHeight='20px'
            color='#000000'
          >
            How much are you comfortable spending this month?
          </Text>
          <Text
            fontFamily='Poppins'
            fontSize='14px'
            lineHeight='20px'
            color='#000000'
            mt='1rem'
          >
            Ensuring your financial comfort is our priority! What&apos;s the
            budget you have in mind for utilities this month? Your preferences
            will help us personalize your utility spending experience.
          </Text> */}
          <BudgetForm />
        </Box>
        <Image src='/assets/budget.png' alt='Budget' />
      </Flex>
    </Box>
  );
};

export default BudgetPlanner;
