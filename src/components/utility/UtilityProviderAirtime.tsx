import React from 'react';

import {Box, Flex, Image, Input} from '@chakra-ui/react';

const UtilityProviderAirtime = ({
  setState,
}: {
  setState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Box px='2rem'>
      <Input
        placeholder='Filter: Service provider name'
        width={{lg: '480px', mlg: '570px'}}
        height='50px'
        background='#F5F5F5'
        borderRadius='6px'
        fontFamily='Poppins'
        fontSize='13px'
        color='#717171'
        focusBorderColor='white'
      />
      <Box w={{lg: '480px', mlg: '559px'}} mt='2.7rem'>
        <Flex
          justifyContent={'space-between'}
          flexWrap={'wrap'}
          gap={'1.35rem 0'}
        >
          {['mtn', 'glo', 'airtel', '9mobile'].map((each) => (
            <Image
              key={each}
              src={`/assets/${each}.png`}
              alt='Provider'
              w={{lg: '21%', mlg: '22%'}}
              h='70px'
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

export default UtilityProviderAirtime;
