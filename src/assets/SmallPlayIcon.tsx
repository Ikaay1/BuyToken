import React from 'react';

import {Icon} from '@chakra-ui/react';

const SmallPlayIcon = (props: any) => {
  return (
    <Icon {...props} viewBox='0 0 10 10'>
      <svg
        width='10'
        height='10'
        viewBox='0 0 10 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M4 3.36451V7.13549C4 7.42305 4.31668 7.59777 4.56055 7.44125L7.52347 5.55576C7.74915 5.4138 7.74915 5.0862 7.52347 4.9406L4.56055 3.05875C4.31668 2.90223 4 3.07695 4 3.36451Z'
          fill='#AD4C86'
        />
        <circle cx='5' cy='5' r='5' fill='black' fill-opacity='0.1' />
      </svg>
    </Icon>
  );
};

export default SmallPlayIcon;
