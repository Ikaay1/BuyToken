'use client';

import React, {useEffect, useState} from 'react';

import BackArrowIcon from '@/assets/BackArrowIcon';
import {useAppDispatch, useAppSelector} from '@/redux/app/hooks';
import {clearUtility} from '@/redux/slices/serviceSlice';
import {Box, Flex, Icon, Text} from '@chakra-ui/react';

import Service from './Service';
import UtilityBorrowForm from './UtilityBorrowForm';
import UtilityForm from './UtilityForm';
import UtilityPaymentAirtime from './UtilityPaymentAirtime';
import UtilityPaymentBorrowElectricity from './UtilityPaymentBorrowElectricity';
import UtilityPaymentCable from './UtilityPaymentCable';
import UtilityPaymentElectricity from './UtilityPaymentElectricity';
import UtilityPaymentInternet from './UtilityPaymentInternet';
import UtilityProviderAirtime from './UtilityProviderAirtime';
import UtilityProviderBorrowElectricity from './UtilityProviderBorrowElectricity';
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
    image: '',
  });
  const [electricityBorrowDetails, setElectricityBorrowDetails] = useState({
    _id: '',
    merchantId: '',
    name: '',
    image: '',
  });
  const [airtimeDetails, setAirtimeDetails] = useState({
    _id: '',
    merchantId: '',
    name: '',
    image: '',
  });
  const [internetDetails, setInternetDetails] = useState({
    _id: '',
    merchantId: '',
    name: '',
    image: '',
  });
  const [cableDetails, setCableDetails] = useState({
    _id: '',
    merchantId: '',
    name: '',
    image: '',
  });
  const [customerDetails, setCustomerDetails] = useState({
    FirstName: '',
    LastName: '',
    CustomerName: '',
    CustomerAddress: '',
    meterNumber: '',
    meterType: '',
    amount: '',
  });
  const [customerBorrowDetails, setCustomerBorrowDetails] = useState({
    FirstName: '',
    LastName: '',
    CustomerName: '',
    CustomerAddress: '',
    meterNumber: '',
    meterType: '',
    amount: '',
  });
  const utility = useAppSelector((state) => state?.utility?.utility);
  console.log('utility', utility);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (utility) {
      setState('Provider');
      if (utility !== 'Data') {
        setProvider(utility);
      } else {
        setProvider('Internet');
      }
      dispatch(clearUtility({payload: {}}));
    }
  }, [utility]);

  return (
    <Box
      borderRadius='16px'
      bg='#FFFFFF'
      pt={state === 'Service' ? '1.9rem' : '1.1rem'}
      pb='8.5rem'
      mt='1.25rem'
      mx={{base: '.5rem', lg: 0}}
    >
      <Flex
        alignItems={'center'}
        pl={{base: '0', lg: '3.3rem', mlg: '4.3rem'}}
        position='relative'
      >
        {state !== 'Service' && (
          <Flex
            alignItems={'center'}
            cursor='pointer'
            onClick={() => {
              if (provider === 'Electricity' || provider === 'Borrow') {
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
        )}
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
          {`${
            state === 'Service'
              ? 'Utility'
              : provider === 'Electricity'
              ? 'Electricity'
              : provider === 'Borrow'
              ? 'Borrow Electricity'
              : provider === 'Internet'
              ? 'Internet'
              : provider === 'Airtime'
              ? 'Airtime'
              : 'Cable'
          } Services`}
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
          {provider === 'Electricity' || provider === 'Borrow' || !provider
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
            ) : provider === 'Borrow' ? (
              <UtilityProviderBorrowElectricity
                setState={setState}
                setElectricityDetails={setElectricityBorrowDetails}
              />
            ) : provider === 'Airtime' ? (
              <UtilityProviderAirtime
                setState={setState}
                setAirtimeDetails={setAirtimeDetails}
              />
            ) : provider === 'Internet' ? (
              <UtilityProviderInternet
                setInternetDetails={setInternetDetails}
                setState={setState}
              />
            ) : (
              <UtilityProviderCable
                setState={setState}
                setCableDetails={setCableDetails}
              />
            )
          ) : state === 'Form' ? (
            provider === 'Electricity' ? (
              <UtilityForm
                electricityDetails={electricityDetails}
                setState={setState}
                customerDetails={customerDetails}
                setCustomerDetails={setCustomerDetails}
              />
            ) : (
              <UtilityBorrowForm
                electricityDetails={electricityBorrowDetails}
                setState={setState}
                customerDetails={customerBorrowDetails}
                setCustomerDetails={setCustomerBorrowDetails}
              />
            )
          ) : provider === 'Electricity' ? (
            <UtilityPaymentElectricity
              electricityDetails={electricityDetails}
              customerDetails={customerDetails}
            />
          ) : provider === 'Borrow' ? (
            <UtilityPaymentBorrowElectricity
              electricityDetails={electricityBorrowDetails}
              customerDetails={customerBorrowDetails}
            />
          ) : provider === 'Airtime' ? (
            <UtilityPaymentAirtime airtimeDetails={airtimeDetails} />
          ) : provider === 'Internet' ? (
            <UtilityPaymentInternet internetDetails={internetDetails} />
          ) : (
            <UtilityPaymentCable cableDetails={cableDetails} />
          )}
        </>
      </Flex>
    </Box>
  );
};

export default UtilityServices;
