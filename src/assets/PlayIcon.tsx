import React from 'react';

import {Icon} from '@chakra-ui/react';

const PlayIcon = (props: any) => {
  return (
    <Icon viewBox='0 0 66 66' {...props}>
      <svg
        width='66'
        height='66'
        viewBox='0 0 66 66'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='33' cy='33' r='33' fill='white' fill-opacity='0.2' />
        <path
          d='M20 14.6451V52.3549C20 55.2305 23.1668 56.9777 25.6055 55.4125L55.2347 36.5576C57.4915 35.138 57.4915 31.862 55.2347 30.406L25.6055 11.5875C23.1668 10.0223 20 11.7695 20 14.6451Z'
          fill='#4CAD73'
        />
      </svg>
    </Icon>
  );
};

export default PlayIcon;
