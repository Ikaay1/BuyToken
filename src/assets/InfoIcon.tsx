import React from 'react';

import {Icon} from '@chakra-ui/react';

const InfoIcon = (props: any) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10.8 6V8.4H13.2V6H10.8ZM14.4 18V15.6H13.2V10.8H9.6V13.2H10.8V15.6H9.6V18H14.4ZM24 12C24 18.6 18.6 24 12 24C5.4 24 0 18.6 0 12C0 5.4 5.4 0 12 0C18.6 0 24 5.4 24 12ZM21.6 12C21.6 6.696 17.304 2.4 12 2.4C6.696 2.4 2.4 6.696 2.4 12C2.4 17.304 6.696 21.6 12 21.6C17.304 21.6 21.6 17.304 21.6 12Z'
          fill='#417657'
        />
      </svg>
    </Icon>
  );
};

export default InfoIcon;
