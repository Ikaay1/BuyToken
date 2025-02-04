import React from 'react';

import {Icon} from '@chakra-ui/react';

const CancelIcon = (props: any) => {
  return (
    <Icon {...props} viewBox='0 0 7 7'>
      <svg
        width='7'
        height='7'
        viewBox='0 0 7 7'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7 0.705L6.295 0L3.5 2.795L0.705 0L0 0.705L2.795 3.5L0 6.295L0.705 7L3.5 4.205L6.295 7L7 6.295L4.205 3.5L7 0.705Z'
          fill='#C20B0B'
        />
      </svg>
    </Icon>
  );
};

export default CancelIcon;
