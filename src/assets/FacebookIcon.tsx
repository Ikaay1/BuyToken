import React from 'react';

import {Icon} from '@chakra-ui/react';

const FacebookIcon = (props: any) => {
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
          d='M20 10C20 4.47581 15.5242 0 10 0C4.47581 0 0 4.47581 0 10C0 14.9911 3.65685 19.1282 8.4375 19.879V12.8907H5.89718V10H8.4375V7.79677C8.4375 5.29073 9.92944 3.90645 12.2145 3.90645C13.3089 3.90645 14.4532 4.10161 14.4532 4.10161V6.56129H13.1919C11.95 6.56129 11.5625 7.33226 11.5625 8.12298V10H14.3359L13.8923 12.8907H11.5625V19.879C16.3431 19.1282 20 14.9911 20 10Z'
          fill='#E2E2E2'
        />
      </svg>
    </Icon>
  );
};

export default FacebookIcon;
