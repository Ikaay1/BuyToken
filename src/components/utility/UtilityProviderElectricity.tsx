import React from 'react';

import {Box, Flex, Image, Input} from '@chakra-ui/react';

const UtilityProviderElectricity = ({
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
      <Box w={{lg: '480px', mlg: '559px'}} mt={{base: '1.7rem', lg: '2.7rem'}}>
        <Flex
          justifyContent={'space-between'}
          flexWrap={'wrap'}
          gap={{base: '2.5rem 0', lg: '1.35rem 0'}}
        >
          {[
            'provider1',
            'provider2',
            'provider3',
            'provider4',
            'provider1',
            'provider2',
            'provider3',
            'provider4',
          ].map((each) => (
            <Image
              key={each}
              src={`/assets/${each}.png`}
              alt='Provider'
              w={{base: '22%', lg: '21%', mlg: '22%'}}
              h={{base: '50px', lg: '70px'}}
              objectFit={'cover'}
              onClick={() => setState('Form')}
              cursor='pointer'
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default UtilityProviderElectricity;
