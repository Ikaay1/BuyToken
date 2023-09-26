import React from 'react';

import {Icon} from '@chakra-ui/react';

const EmptyTransactionIcon = (props: any) => {
  return (
    <Icon {...props} viewBox='0 0 67 67'>
      <svg
        width='67'
        height='67'
        viewBox='0 0 67 67'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M60.3 50.25H67V43.55H60.3V50.25ZM60.3 16.75V36.85H67V16.75M13.4 46.9H30.15V53.6H13.4M13.4 33.5H40.2V40.2H13.4M6.7 0C2.9815 0 0 2.9815 0 6.7V60.3C0 64.0185 2.9815 67 6.7 67H46.9C50.6185 67 53.6 64.0185 53.6 60.3V20.1L33.5 0M6.7 6.7H30.15V23.45H46.9V60.3H6.7V6.7Z'
          fill='#929292'
        />
      </svg>
    </Icon>
  );
};

export default EmptyTransactionIcon;
