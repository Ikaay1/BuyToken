import React from 'react';

import {Icon} from '@chakra-ui/react';

const ArrowLeft = (props: any) => {
  return (
    <Icon viewBox='0 0 20 20' {...props}>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12.5 16.5999L7.06664 11.1666C6.42497 10.5249 6.42497 9.4749 7.06664 8.83324L12.5 3.3999'
          stroke='#242424'
          stroke-width='1.5'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </Icon>
  );
};

export default ArrowLeft;
