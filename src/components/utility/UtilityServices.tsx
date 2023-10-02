import React, {useState} from 'react';

import IdCardIcon from '@/assets/IdCardIcon';
import PersonIcon from '@/assets/PersonIcon';
import WhiteArrowRight from '@/assets/WhiteArrowRight';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';

import Service from './Service';
import UtilityForm from './UtilityForm';
import UtilityPaymentAirtime from './UtilityPaymentAirtime';
import UtilityPaymentElectricity from './UtilityPaymentElectricity';
import UtilityProviderAirtime from './UtilityProviderAirtime';
import UtilityProviderElectricity from './UtilityProviderElectricity';
import UtilitySteps from './UtilitySteps';

const UtilityServices = () => {
  const [state, setState] = useState('Service');
  const [provider, setProvider] = useState('');
  return (
    <Box
      borderRadius='16px'
      bg='#FFFFFF'
      pt='1.1rem'
      pb='8.5rem'
      mt='1.25rem'
      mx={{base: '.5rem', lg: 0}}
    >
      <Text
        fontFamily='Raleway'
        fontWeight='700'
        fontSize={{lg: '20px'}}
        color='#000000'
        textAlign={'center'}
      >
        Utility Services
      </Text>
      <Flex
        mt={{base: '2rem', lg: '1.8rem'}}
        display={{base: 'block', lg: 'flex'}}
        px={{base: '.5rem', lg: 0}}
      >
        <Box
          pl={{base: '0', lg: '3.3rem', mlg: '4.3rem'}}
          mt={{base: '0', lg: '1.9rem'}}
          display={{base: 'flex', lg: 'block'}}
          justifyContent={'space-between'}
          position={'relative'}
        >
          <Box w='100%' top='20%' position={'absolute'} display={{lg: 'none'}}>
            <Box width='260px' border='2px solid #F5F5F5' mx='auto'></Box>
          </Box>
          {provider === 'Electricity' || !provider
            ? [
                'Select Service',
                'Select Service Provider',
                'Fill Request Form',
                'Preview Request & Make payment',
              ].map((each, index) => (
                <UtilitySteps
                  key={each}
                  each={each}
                  index={index}
                  state={state}
                  length={4}
                />
              ))
            : [
                'Select Service',
                'Select Service Provider',
                'Fill Request Form & Make payment',
              ].map((each, index) => (
                <UtilitySteps
                  key={each}
                  each={each}
                  index={index}
                  state={state}
                  length={3}
                />
              ))}
        </Box>
        <Box
          ml='1.4rem'
          height='355px'
          border='2px solid #F5F5F5'
          display={{base: 'none', lg: 'block'}}
        ></Box>
        <>
          {state === 'Service' ? (
            <Service setState={setState} setProvider={setProvider} />
          ) : state === 'Provider' ? (
            provider === 'Electricity' ? (
              <UtilityProviderElectricity setState={setState} />
            ) : (
              //  : provider === 'Airtime' ? (
              //   <UtilityProviderAirtime setState={setState} />
              // )
              <Box></Box>
            )
          ) : state === 'Form' ? (
            <UtilityForm setState={setState} />
          ) : provider === 'Electricity' ? (
            <UtilityPaymentElectricity />
          ) : (
            // <UtilityPaymentAirtime />
            <Box></Box>
          )}
        </>
      </Flex>
    </Box>
  );
};

export default UtilityServices;
