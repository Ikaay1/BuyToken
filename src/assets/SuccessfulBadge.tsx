import React from 'react';

import {Icon} from '@chakra-ui/react';

const SuccessfulBadge = (props: any) => {
  return (
    <Icon {...props} viewBox='0 0 16 16'>
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4ZM11.672 4.464L6.4 9.736L4.328 7.672L3.2 8.8L6.4 12L12.8 5.6L11.672 4.464Z'
          fill='#4CAD73'
        />
      </svg>
    </Icon>
  );
};

export default SuccessfulBadge;
