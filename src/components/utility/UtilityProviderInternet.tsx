import React from 'react';

import {Box, Flex, Image, Input} from '@chakra-ui/react';

const UtilityProviderInternet = ({
  setState,
}: {
  setState: React.Dispatch<React.SetStateAction<string>>;
}) => {
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
      />
      <Box w={{lg: '480px', mlg: '559px'}} mt='2.7rem'>
        <Flex
          justifyContent={'space-between'}
          flexWrap={'wrap'}
          fontSize={{base: '12px', lg: '13px'}}
        >
          {['mtn', 'glo', 'airtel', '9mobile'].map((each) => (
            <Image
              key={each}
              src={`/assets/${each}.png`}
              alt='Provider'
              w={{base: '22%', lg: '21%', mlg: '22%'}}
              h={{base: '50px', lg: '70px'}}
              objectFit={'cover'}
              onClick={() => setState('payment')}
              cursor='pointer'
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default UtilityProviderInternet;
