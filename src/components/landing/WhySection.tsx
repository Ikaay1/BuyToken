import React from 'react';

import ClockSvg from '@/assets/ClockSvg';
import NairaSvg from '@/assets/NairaSvg';
import SlashedCardIcon from '@/assets/SlashedCardIcon';
import {Box, Flex, Icon, SimpleGrid, Text} from '@chakra-ui/react';

const WhySection = () => {
  return (
    <Box pt={{base: '9.5rem', lg: '11rem'}} pb='3.8rem'>
      <Text
        fontFamily='Raleway'
        fontWeight='600'
        fontSize={{base: '18px', lg: '30px'}}
        color='#929292'
        textAlign={'center'}
      >
        Why BuyToken?{' '}
        <Text as={'span'} color='#4CAD73'>
          Because Your Finances Deserve a Friend 🌟
        </Text>
      </Text>
      <Box
        backgroundImage={'url(/assets/why_bg.png)'}
        backgroundRepeat={'no-repeat'}
        backgroundPosition={{base: 'center bottom', lg: 'center right'}}
        h={{base: '745px', lg: '280px'}}
        w={{lg: '1010px'}}
        mx='auto'
        px={{base: '1.5rem', lg: '2rem'}}
        mt='2.3rem'
      >
        <SimpleGrid
          columns={{base: 1, lg: 2}}
          spacing={10}
          spacingY={8}
          w={{lg: '690px'}}
        >
          {[
            {
              icon: NairaSvg,
              text: 'Enjoy exclusive discounts on airtime and data purchase',
            },
            {
              icon: ClockSvg,
              text: 'Your value, delivered fast, with BuyToken!',
            },
            {
              icon: SlashedCardIcon,
              text: "No need to risk your card. It's hassle-free, it's safe—because your peace of mind matters most",
            },
            {
              icon: SlashedCardIcon,
              text: '🌟 Set your personalized utility budget effortlessly and track your spend like a financial maestro with our SmartSpend',
            },
          ].map(({icon, text}) => (
            <Flex alignItems={'center'} key={text}>
              <Icon as={icon} w='61px' h='72.09px' mr='1.3rem' />
              <Text
                width='231px'
                fontFamily='Poppins'
                fontSize='14px'
                lineHeight='21px'
                color='#929292'
              >
                {text}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WhySection;
