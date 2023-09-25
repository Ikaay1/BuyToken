import React from 'react';

import {Icon} from '@chakra-ui/react';

const NotificationIcon = (props: any) => {
  return (
    <Icon viewBox='0 0 18 21' {...props}>
      <svg
        width='18'
        height='21'
        viewBox='0 0 18 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7 19H11C11 20.1 10.1 21 9 21C7.9 21 7 20.1 7 19ZM18 17V18H0V17L2 15V9C2 5.9 4 3.2 7 2.3V2C7 0.9 7.9 0 9 0C10.1 0 11 0.9 11 2V2.3C14 3.2 16 5.9 16 9V15L18 17ZM14 9C14 6.2 11.8 4 9 4C6.2 4 4 6.2 4 9V16H14V9Z'
          fill='#929292'
        />
      </svg>
    </Icon>
  );
};

export default NotificationIcon;
