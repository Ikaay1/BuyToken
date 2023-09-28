import React from 'react';

import {Icon} from '@chakra-ui/react';

const InfoBadge = (props: any) => {
  return (
    <Icon viewBox='0 0 16 16' {...props}>
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.2 4V5.6H8.8V4H7.2ZM9.6 12V10.4H8.8V7.2H6.4V8.8H7.2V10.4H6.4V12H9.6ZM16 8C16 12.4 12.4 16 8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8ZM14.4 8C14.4 4.464 11.536 1.6 8 1.6C4.464 1.6 1.6 4.464 1.6 8C1.6 11.536 4.464 14.4 8 14.4C11.536 14.4 14.4 11.536 14.4 8Z'
          fill='#D7D7D7'
        />
      </svg>
    </Icon>
  );
};

export default InfoBadge;
