import React from 'react';

import ArrowLeft from '@/assets/ArrowLeft';
import ArrowRight from '@/assets/ArrowRight';
import {Flex, Icon, Select, Text} from '@chakra-ui/react';

const Paginate = ({
  page,
  limit,
  setPage,
  setLimit,
  totalPages,
}: {
  page: number;
  limit: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}) => {
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
            fontFamily='Inter'
            fontWeight='500'
            fontSize='12px'
            color='#242424'
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((each) => (
              <option value={Number(each)} key={each}>
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
          {page} of {totalPages}
        </Text>
        <Flex alignItems={'center'}>
          <Icon
            mr='1.65rem'
            as={ArrowLeft}
            onClick={() => {
              if (page > 1) {
                setPage((prevPage) => prevPage - 1);
              }
            }}
            cursor='pointer'
          />
          <Icon
            as={ArrowRight}
            onClick={() => {
              if (page < totalPages) {
                setPage((prevPage) => prevPage + 1);
              }
            }}
            cursor='pointer'
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Paginate;
