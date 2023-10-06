import React, {useState} from 'react';

import BackArrowIcon from '@/assets/BackArrowIcon';
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
import UtilityPaymentCable from './UtilityPaymentCable';
import UtilityPaymentElectricity from './UtilityPaymentElectricity';
import UtilityPaymentInternet from './UtilityPaymentInternet';
import UtilityProviderAirtime from './UtilityProviderAirtime';
import UtilityProviderCable from './UtilityProviderCable';
import UtilityProviderElectricity from './UtilityProviderElectricity';
import UtilityProviderInternet from './UtilityProviderInternet';
import UtilitySteps from './UtilitySteps';

const UtilityServices = () => {
  const [state, setState] = useState('Service');
  const [provider, setProvider] = useState('');
  const [electricityDetails, setElectricityDetails] = useState({
    _id: '',
    merchantId: '',
    name: '',
  });
  const [customerDetails, setCustomerDetails] = useState({
    FirstName: '',
    LastName: '',
    CustomerAddress: '',
    meterNumber: '',
    meterType: '',
    amount: '',
  });
  return (
    <Box
      borderRadius='16px'
      bg='#FFFFFF'
      pt='1.1rem'
      pb='8.5rem'
      mt='1.25rem'
      mx={{base: '.5rem', lg: 0}}
    >
      <Flex
        alignItems={'center'}
        pl={{base: '0', lg: '3.3rem', mlg: '4.3rem'}}
        position='relative'
      >
        <Flex
          alignItems={'center'}
          cursor='pointer'
          onClick={() => {
            if (provider === 'Electricity') {
              if (state === 'Provider') {
                setState('Service');
                setProvider('');
              }
              if (state === 'Form') {
                setState('Provider');
              }
              if (state === 'payment') {
                setState('Form');
              }
            } else {
              if (state === 'Provider') {
                setState('Service');
                setProvider('');
              }
              if (state === 'payment') {
                setState('Provider');
              }
            }
          }}
        >
          <Icon
            mr={{base: '.3rem', lg: '.55rem'}}
            w={{base: '16px', lg: '24px'}}
            h={{base: '16px', lg: '24px'}}
            as={BackArrowIcon}
          />
          <Text
            fontFamily='Inter'
            fontSize={{base: '12px', lg: '14px'}}
            color='#000000'
          >
            Back
          </Text>
        </Flex>
        <Text
          fontFamily='Raleway'
          fontWeight='700'
          fontSize={{lg: '20px'}}
          color='#000000'
          textAlign={'center'}
          position='absolute'
          left='50%'
          transform='translateX(-50%)'
        >
          Utility Services
        </Text>
      </Flex>

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
              <UtilityProviderElectricity
                setState={setState}
                setElectricityDetails={setElectricityDetails}
              />
            ) : provider === 'Airtime' ? (
              <UtilityProviderAirtime setState={setState} />
            ) : provider === 'Internet' ? (
              <UtilityProviderInternet setState={setState} />
            ) : (
              <UtilityProviderCable setState={setState} />
            )
          ) : state === 'Form' ? (
            <UtilityForm
              electricityDetails={electricityDetails}
              setState={setState}
              customerDetails={customerDetails}
              setCustomerDetails={setCustomerDetails}
            />
          ) : provider === 'Electricity' ? (
            <UtilityPaymentElectricity
              electricityDetails={electricityDetails}
              customerDetails={customerDetails}
            />
          ) : provider === 'Airtime' ? (
            <UtilityPaymentAirtime />
          ) : provider === 'Internet' ? (
            <UtilityPaymentInternet />
          ) : (
            <UtilityPaymentCable />
          )}
        </>
      </Flex>
    </Box>
  );
};

export default UtilityServices;
