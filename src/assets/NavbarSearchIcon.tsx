import React from 'react';

import {Icon} from '@chakra-ui/react';

const NavbarSearchIcon = (props: any) => {
  return (
    <Icon {...props} viewBox='0 0 27 27'>
      <svg
        width='27'
        height='27'
        viewBox='0 0 27 27'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12.1113 23.2226C18.2479 23.2226 23.2226 18.2479 23.2226 12.1113C23.2226 5.97469 18.2479 1 12.1113 1C5.97469 1 1 5.97469 1 12.1113C1 18.2479 5.97469 23.2226 12.1113 23.2226Z'
          stroke='#4CAD73'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M25.9995 26.0008L19.9578 19.959'
          stroke='#4CAD73'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </Icon>
  );
};

export default NavbarSearchIcon;
