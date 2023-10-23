import React from 'react';

import {Icon} from '@chakra-ui/react';

const DateIcon = (props: any) => {
  return (
    <Icon viewBox='0 0 14 16' {...props}>
      <svg
        width='14'
        height='16'
        viewBox='0 0 14 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M4.75 7.5H3.25V9H4.75V7.5ZM7.75 7.5H6.25V9H7.75V7.5ZM10.75 7.5H9.25V9H10.75V7.5ZM12.25 2.25H11.5V0.75H10V2.25H4V0.75H2.5V2.25H1.75C0.9175 2.25 0.25 2.925 0.25 3.75V14.25C0.25 14.6478 0.408035 15.0294 0.68934 15.3107C0.970644 15.592 1.35218 15.75 1.75 15.75H12.25C12.6478 15.75 13.0294 15.592 13.3107 15.3107C13.592 15.0294 13.75 14.6478 13.75 14.25V3.75C13.75 3.35218 13.592 2.97064 13.3107 2.68934C13.0294 2.40804 12.6478 2.25 12.25 2.25ZM12.25 14.25H1.75V6H12.25V14.25Z'
          fill='#575757'
        />
      </svg>
    </Icon>
  );
};

export default DateIcon;
