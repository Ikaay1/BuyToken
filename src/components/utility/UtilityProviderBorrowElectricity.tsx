import React, {useEffect, useState} from 'react';

import {ElectricityDetailsInterface} from '@/constants/interface';
import {useGetPowerProvidersQuery} from '@/redux/services/electricity.service';
import {
  Box,
  Flex,
  Image,
  Input,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react';

const UtilityProviderBorrowElectricity = ({
  setState,
  setElectricityDetails,
}: {
  setState: React.Dispatch<React.SetStateAction<string>>;
  setElectricityDetails: React.Dispatch<
    React.SetStateAction<ElectricityDetailsInterface>
  >;
}) => {
  const {data, isLoading} = useGetPowerProvidersQuery('');
  console.log('powerProviders', data);
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
      <Box w={{lg: '480px', mlg: '570px'}} mt={{base: '1.7rem', lg: '2.7rem'}}>
        <SimpleGrid columns={3} spacing={10}>
          {isLoading
            ? [1, 2, 3].map((each) => (
                <Box key={each} h={{base: '50px', lg: '70px'}}>
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
                  onClick={() => {
                    setState('Form');
                    setElectricityDetails(each);
                  }}
                  cursor='pointer'
                >
                  <Image
                    src={`/assets/provider1.png`}
                    alt='Provider'
                    w='100%'
                    h={{base: '50px', lg: '70px'}}
                    objectFit={'cover'}
                  />
                  <Text
                    fontFamily='Poppins'
                    fontSize={{base: '12px', lg: '13px'}}
                    lineHeight='20px'
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
                  onClick={() => {
                    setState('Form');
                    setElectricityDetails(each);
                  }}
                  cursor='pointer'
                >
                  <Image
                    src={`/assets/provider1.png`}
                    alt='Provider'
                    w='100%'
                    h={{base: '50px', lg: '70px'}}
                    objectFit={'cover'}
                  />
                  <Text
                    fontFamily='Poppins'
                    fontSize={{base: '12px', lg: '13px'}}
                    lineHeight='20px'
                    textAlign='center'
                    color='#929292'
                    mt='.2rem'
                  >
                    {each?.name}
                  </Text>
                </Box>
              ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default UtilityProviderBorrowElectricity;
