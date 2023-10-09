import React, {useEffect, useState} from 'react';

import {ElectricityDetailsInterface} from '@/constants/interface';
import {useGetAirtimeProvidersQuery} from '@/redux/services/electricity.service';
import {Box, Flex, Image, Input, Skeleton} from '@chakra-ui/react';

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
      <Box w={{lg: '480px', mlg: '559px'}} mt='2.7rem'>
        <Flex
          // justifyContent={'space-between'}
          flexWrap={'wrap'}
          gap={{base: '2.5rem 0', lg: '1.35rem 0'}}
        >
          {isLoading
            ? [1, 2, 3, 4].map((each) => (
                <Skeleton
                  key={each}
                  mr={{base: '.55rem', lg: '1.2rem', mlg: '1rem'}}
                  w={{base: '22%', lg: '21%', mlg: '22%'}}
                  h={{base: '50px', lg: '70px'}}
                ></Skeleton>
              ))
            : filterText
            ? providers?.map((each: ElectricityDetailsInterface) => (
                <Image
                  key={each._id}
                  src={`/assets/mtn.png`}
                  alt='Provider'
                  w={{base: '22%', lg: '21%', mlg: '22%'}}
                  h={{base: '50px', lg: '70px'}}
                  objectFit={'cover'}
                  onClick={() => {
                    setState('payment');
                    setAirtimeDetails({
                      ...each,
                      merchantId: each?.merchantId.trim(),
                    });
                  }}
                  cursor='pointer'
                  mr={{base: '.55rem', lg: '1.2rem', mlg: '1rem'}}
                />
              ))
            : data?.data?.map((each: ElectricityDetailsInterface) => (
                <Image
                  key={each._id}
                  src={`/assets/mtn.png`}
                  alt='Provider'
                  w={{base: '22%', lg: '21%', mlg: '22%'}}
                  h={{base: '50px', lg: '70px'}}
                  objectFit={'cover'}
                  onClick={() => {
                    setState('payment');
                    setAirtimeDetails({
                      ...each,
                      merchantId: each?.merchantId.trim(),
                    });
                  }}
                  cursor='pointer'
                  mr={{base: '.55rem', lg: '1.2rem', mlg: '1rem'}}
                />
              ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default UtilityProviderAirtime;
