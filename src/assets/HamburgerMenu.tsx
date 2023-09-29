import React from 'react';

import {Icon} from '@chakra-ui/react';

const HamburgerMenu = (props: any) => {
  return (
    <Icon viewBox='0 0 23 19' {...props}>
      <svg
        width='23'
        height='19'
        viewBox='0 0 23 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 0.217773H22.5V3.25116H0V0.217773ZM0 7.80124H22.5V10.8346H0V7.80124ZM0 15.3847H22.5V18.4181H0V15.3847Z'
          fill='#417657'
        />
      </svg>
    </Icon>
  );
};

export default HamburgerMenu;
