import React from 'react';

import {Icon} from '@chakra-ui/react';

const RightIcon = (props: any) => {
  return (
    <Icon viewBox='0 0 8 12' {...props}>
      <svg
        width='8'
        height='12'
        viewBox='0 0 8 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 10.58L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.58Z'
          fill='white'
        />
      </svg>
    </Icon>
  );
};

export default RightIcon;
