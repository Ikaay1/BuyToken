import React from 'react';

import { Icon } from '@chakra-ui/react';

const SearchIcon = (props: any) => {
  return (
    <Icon viewBox='0 0 19 19' {...props}>
      <svg
        width='19'
        height='19'
        viewBox='0 0 19 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8.16303 15.996C12.1191 15.996 15.3261 12.789 15.3261 8.83295C15.3261 4.87692 12.1191 1.66992 8.16303 1.66992C4.207 1.66992 1 4.87692 1 8.83295C1 12.789 4.207 15.996 8.16303 15.996Z'
          stroke='#4CAD73'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M17.1168 17.7867L13.2219 13.8918'
          stroke='#4CAD73'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </Icon>
  );
};

export default SearchIcon;
