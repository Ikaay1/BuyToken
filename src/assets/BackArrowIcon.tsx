import React from 'react';

import {Icon} from '@chakra-ui/react';

const BackArrowIcon = (props: any) => {
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
          d='M20 11.0001V13.0001H8.00003L13.5 18.5001L12.08 19.9201L4.16003 12.0001L12.08 4.08008L13.5 5.50008L8.00003 11.0001H20Z'
          fill='black'
        />
      </svg>
    </Icon>
  );
};

export default BackArrowIcon;
