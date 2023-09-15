'use client';

import React from 'react';

import {Icon} from '@chakra-ui/react';

const PersonIcon = (props: any) => {
  return (
    <Icon {...props} viewBox='0 0 17 19'>
      <svg
        width='17'
        height='19'
        viewBox='0 0 17 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8.30757 10.7126C2.95038 10.7126 0 13.247 0 17.8489C0 18.2083 0.291301 18.4996 0.650718 18.4996H15.9644C16.3238 18.4996 16.6151 18.2083 16.6151 17.8489C16.6151 13.2472 13.6648 10.7126 8.30757 10.7126ZM1.32512 17.1982C1.58107 13.7574 3.92691 12.0141 8.30757 12.0141C12.6882 12.0141 15.0341 13.7574 15.2903 17.1982H1.32512Z'
          fill='#737373'
        />
        <path
          d='M8.30766 0.669922C5.84683 0.669922 3.99121 2.56288 3.99121 5.07294C3.99121 7.65652 5.92756 9.75814 8.30766 9.75814C10.6878 9.75814 12.6241 7.65652 12.6241 5.07315C12.6241 2.56288 10.7685 0.669922 8.30766 0.669922ZM8.30766 8.45691C6.64507 8.45691 5.29265 6.93898 5.29265 5.07315C5.29265 3.27586 6.56069 1.97136 8.30766 1.97136C10.0267 1.97136 11.3227 3.30469 11.3227 5.07315C11.3227 6.93898 9.97025 8.45691 8.30766 8.45691Z'
          fill='#737373'
        />
      </svg>
    </Icon>
  );
};

export default PersonIcon;
