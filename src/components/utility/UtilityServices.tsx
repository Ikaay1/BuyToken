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
    <Box borderRadius='16px' bg='#FFFFFF' pt='1.1rem' pb='8.5rem' mt='1.25rem'>
      <Text
        fontFamily='Raleway'
        fontWeight='700'
        fontSize='20px'
        color='#000000'
        textAlign={'center'}
      >
        Utility Service
      </Text>
      <Flex mt='1.8rem'>
        <Box pl={{lg: '3.3rem', mlg: '4.3rem'}} mt='1.9rem'>
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
        <Box ml='1.4rem' height='355px' border='2px solid #F5F5F5'></Box>
        <>
          {state === 'Service' ? (
            <Service setState={setState} setProvider={setProvider} />
          ) : state === 'Provider' ? (
            provider === 'Electricity' ? (
              <UtilityProviderElectricity setState={setState} />
            ) : (
              // provider === 'Airtime' ? (
              //   <UtilityProviderAirtime setState={setState} />
              // ) :
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
