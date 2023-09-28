import React from 'react';

import ArrowLeft from '@/assets/ArrowLeft';
import ArrowRight from '@/assets/ArrowRight';
import {Flex, Icon, Select, Text} from '@chakra-ui/react';

const Paginate = () => {
  return (
    <Flex justifyContent={'flex-end'} mt='.6rem' pr='.9rem'>
      <Flex alignItems={'center'}>
        <Flex alignItems={'center'}>
          <Text fontFamily='Inter' fontSize='12px' color='#949494' mr='.35rem'>
            Rows per page:
          </Text>
          <Select
            w='69px'
            h='24px'
            value={8}
            fontFamily='Inter'
            fontWeight='500'
            fontSize='12px'
            color='#242424'
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((each) => (
              <option value={each} key={each}>
                {each}
              </option>
            ))}
          </Select>
        </Flex>
        <Text
          fontFamily='Inter'
          fontSize='12px'
          color='#242424'
          mx={{base: '1rem', lg: '2rem'}}
        >
          1 of 19
        </Text>
        <Flex alignItems={'center'}>
          <Icon mr='1.65rem' as={ArrowLeft} />
          <Icon as={ArrowRight} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Paginate;
