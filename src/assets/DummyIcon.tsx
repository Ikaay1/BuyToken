import React from 'react';

import {Icon} from '@chakra-ui/react';

const DummyIcon = (props: any) => {
  return (
    <Icon {...props} viewBox='0 0 50 9'>
      <svg
        width='50'
        height='9'
        viewBox='0 0 50 9'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ellipse
          cx='4.99556'
          cy='4.06941'
          rx='4.99556'
          ry='4.06941'
          transform='matrix(-1 0 0 1 49.3149 0.861176)'
          fill='white'
        />
        <ellipse
          cx='4.99556'
          cy='4.06941'
          rx='4.99556'
          ry='4.06941'
          transform='matrix(-1 0 0 1 36.826 0.861168)'
          fill='white'
        />
        <rect
          width='23.7289'
          height='8.13882'
          rx='4.06941'
          transform='matrix(-1 0 0 1 24.3372 0.861168)'
          fill='#DBEFE3'
        />
      </svg>
    </Icon>
  );
};

export default DummyIcon;
