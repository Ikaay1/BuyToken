import React from 'react';
import {PieChart} from 'react-minimal-pie-chart';

import {ExpensesInterface, PlannedInterface} from '@/constants/interface';
import {Box, Progress, Text} from '@chakra-ui/react';

const ChartData = ({
  planned,
  expenses,
}: {
  planned: PlannedInterface;
  expenses: ExpensesInterface;
}) => {
  const round = (num: number) => {
    return Math.round(num * 10) / 10;
  };

  return (
    <>
      <Box w={{lg: '415px'}}>
        {/* <Flex
          w='85px'
          ml='auto'
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Icon as={EditIcon} w='12px' h='12px' />
          <Text fontFamily='Lato' fontSize='13px' color='#000000'>
            Edit Budget
          </Text>
        </Flex> */}
        <Box mt='1.3rem'>
          {[
            {
              name: 'Electricity',
              value: round(
                (expenses?.electricity / planned?.electricity) * 100,
              ),
            },
            {
              name: 'Airtime',
              value: round((expenses?.airtime / planned?.airtime) * 100),
            },
            {
              name: 'Data',
              value: round((expenses?.data / planned?.data) * 100),
            },
            {
              name: 'Cable TV',
              value: round((expenses?.cable / planned?.cableTv) * 10),
            },
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
                colorScheme={value > 100 ? 'red' : 'green'}
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
                    ? `calc(${value}% - 14%)`
                    : `calc(${value}% - 3%)`
                }
              >{`${value}%`}</Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        width='285px'
        h='285px'
        mx={{base: 'auto', lg: '0'}}
        mt={{base: '1.2rem', lg: 0}}
      >
        <Text
          fontFamily='Raleway'
          fontWeight='700'
          fontSize='20px'
          color='#000000'
          textAlign={'center'}
          mb='.65rem'
        >
          Distribution
        </Text>
        <PieChart
          data={[
            {
              title: 'Electricity',
              value: round(
                (expenses?.electricity / planned?.electricity) * 100,
              ),
              color: `rgba(76,173,115,${
                round((expenses?.electricity / planned?.electricity) * 100) /
                100
              })`,
            },
            {
              title: 'Airtime',
              value: round((expenses?.airtime / planned?.airtime) * 100),
              color: `rgba(76,173,115,${
                round((expenses?.airtime / planned?.airtime) * 100) / 100
              })`,
            },
            {
              title: 'Data',
              value: round((expenses?.data / planned?.data) * 100),
              color: `rgba(76,173,115,${
                round((expenses?.data / planned?.data) * 100) / 100
              })`,
            },
            {
              title: 'CableTV',
              value: round((expenses?.cable / planned?.cableTv) * 10),
              color: `rgba(76,173,115,${
                round((expenses?.cable / planned?.cableTv) * 10) / 100
              })`,
            },
          ]}
          label={(props) => {
            const {value, title} = props.dataEntry;
            return `${title} - ${value}%`;
          }}
          labelStyle={{
            fontFamily: 'Raleway',
            fontWeight: '600',
            fontSize: '3px',
            lineHeight: '20px',
            fill: '#FFFFFF',
          }}
          labelPosition={50}
          animate
        />
      </Box>
    </>
  );
};

export default ChartData;
