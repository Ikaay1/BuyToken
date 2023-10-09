import React, {useEffect, useState} from 'react';

import {ElectricityDetailsInterface} from '@/constants/interface';
import {useGetAirtimeProvidersQuery} from '@/redux/services/electricity.service';
import {Box, Flex, Image, Input, Skeleton, Text} from '@chakra-ui/react';

const UtilityProviderAirtime = ({
  setState,
  setAirtimeDetails,
}: {
  setState: React.Dispatch<React.SetStateAction<string>>;
  setAirtimeDetails: React.Dispatch<
    React.SetStateAction<ElectricityDetailsInterface>
  >;
}) => {
  const {data, isLoading} = useGetAirtimeProvidersQuery('');
  console.log('airtimeProviders', data);
  const [providers, setProviders] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    if (data) {
      setProviders(
        data?.data?.filter((each: ElectricityDetailsInterface) =>
          each?.name?.toLowerCase().includes(filterText.toLowerCase()),
        ),
      );
    }
  }, [filterText]);
  return (
    <Box px={{lg: '2rem'}} pt={{base: '2rem', lg: 0}}>
      <Input
        placeholder='Filter: Service provider name'
        width={{base: '100%', lg: '480px', mlg: '570px'}}
        height='50px'
        background='#F5F5F5'
        borderRadius='6px'
        fontFamily='Poppins'
        fontSize={{base: '12px', lg: '13px'}}
        color='#717171'
        focusBorderColor='white'
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <Box w={{lg: '480px', mlg: '570px'}} mt='2.7rem'>
        <Flex
          // justifyContent={'space-between'}
          flexWrap={'wrap'}
          gap={{base: '2.5rem 0', lg: '1.35rem 0'}}
        >
          {isLoading
            ? [1, 2, 3, 4].map((each) => (
                <Box
                  key={each}
                  mr={{base: '.55rem', lg: '1.2rem', mlg: '1rem'}}
                  w={{base: '22%', lg: '21%', mlg: '22%'}}
                  h={{base: '50px', lg: '70px'}}
                >
                  <Skeleton w='100%' h='100%'></Skeleton>
                  <Flex justifyContent={'center'} mt='.4rem'>
                    <Skeleton w={'30px'} h={'10px'}></Skeleton>
                  </Flex>
                </Box>
              ))
            : filterText
            ? providers?.map((each: ElectricityDetailsInterface) => (
                <Box
                  key={each?._id}
                  w={{base: '22%', lg: '21%', mlg: '22%'}}
                  onClick={() => {
                    setState('payment');
                    setAirtimeDetails({
                      ...each,
                      merchantId: each?.merchantId.trim(),
                    });
                  }}
                  cursor='pointer'
                  mr={{base: '.55rem', lg: '1.2rem', mlg: '1rem'}}
                >
                  <Image
                    src={`/assets/mtn.png`}
                    alt='Provider'
                    w='100%'
                    h={{base: '50px', lg: '70px'}}
                    objectFit={'cover'}
                  />
                  <Text
                    fontFamily='Poppins'
                    fontSize={{base: '8px', lg: '11px'}}
                    lineHeight={{base: '12px', lg: '16px'}}
                    textAlign='center'
                    color='#929292'
                    mt='.2rem'
                  >
                    {each?.name}
                  </Text>
                </Box>
              ))
            : data?.data?.map((each: ElectricityDetailsInterface) => (
                <Box
                  key={each?._id}
                  w={{base: '22%', lg: '21%', mlg: '22%'}}
                  onClick={() => {
                    setState('payment');
                    setAirtimeDetails({
                      ...each,
                      merchantId: each?.merchantId.trim(),
                    });
                  }}
                  cursor='pointer'
                  mr={{base: '.55rem', lg: '1.2rem', mlg: '1rem'}}
                >
                  <Image
                    src={`/assets/mtn.png`}
                    alt='Provider'
                    w='100%'
                    h={{base: '50px', lg: '70px'}}
                    objectFit={'cover'}
                  />
                  <Text
                    fontFamily='Poppins'
                    fontSize={{base: '8px', lg: '11px'}}
                    lineHeight={{base: '12px', lg: '16px'}}
                    textAlign='center'
                    color='#929292'
                    mt='.2rem'
                  >
                    {each?.name}
                  </Text>
                </Box>
              ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default UtilityProviderAirtime;
