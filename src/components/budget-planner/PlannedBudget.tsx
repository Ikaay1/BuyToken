import React from 'react';

import EditIcon from '@/assets/EditIcon';
import {Box, Flex, Icon, Image, Progress, Text} from '@chakra-ui/react';

import BudgetForm from './BudgetForm';

const PlannedBudget = () => {
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
        Budget Planner
      </Text>
      <Text
        width='821px'
        fontFamily='Poppins'
        fontSize='14px'
        lineHeight='21px'
        textAlign='center'
        mx='auto'
        color='#000000'
        mt='.7rem'
      >
        We&apos;re here to support your financial goals, providing personalized
        insights, exclusive discounts, and a streamlined approach to managing
        your utility expenses. Take a proactive step towards financial
        discipline
        <br />– fund your BuyToken account with your intended utility amount for
        a smarter, more organized budgeting experience.
      </Text>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        mt='2.5rem'
        maxWidth={{lg: '850px', mlg: '100%'}}
      >
        <Box w='415px'>
          <Flex
            w='85px'
            ml='auto'
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Icon as={EditIcon} w='12px' h='12px' />
            <Text fontFamily='Lato' fontSize='13px' color='#000000'>
              Edit Budget
            </Text>
          </Flex>
          <Box mt='1.3rem'>
            {[
              {name: 'Electricity', value: 48},
              {name: 'Airtime', value: 15},
              {name: 'Data', value: 22},
              {name: 'Cable TV', value: 100},
            ].map(({name, value}) => (
              <Box key={name} mt='.6rem'>
                <Text
                  fontFamily='Poppins'
                  fontWeight='600'
                  fontSize='14px'
                  color='#000000'
                >
                  {name}
                </Text>
                <Progress
                  colorScheme='green'
                  size='md'
                  value={value}
                  borderRadius='10px'
                  opacity={`${value}%`}
                />
                <Text
                  fontFamily='Poppins'
                  fontSize='14px'
                  color='#000000'
                  ml={
                    value >= 100
                      ? `calc(${value}% - 10%)`
                      : `calc(${value}% - 3%)`
                  }
                >{`${value}%`}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default PlannedBudget;
