import React from 'react';

import {Icon} from '@chakra-ui/react';

const BudgetIcon = (props: any) => {
  return (
    <Icon viewBox='0 0 30 30' {...props}>
      <svg
        width='30'
        height='30'
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M15.0001 4.50195C9.19506 4.50195 4.50006 9.19695 4.50006 15.002C4.50006 20.807 9.19506 25.502 15.0001 25.502C20.8051 25.502 25.5001 20.807 25.5001 15.002C25.5001 9.19695 20.8051 4.50195 15.0001 4.50195ZM15.0001 24.002C10.0351 24.002 6.00006 19.967 6.00006 15.002C6.00006 10.037 10.0351 6.00195 15.0001 6.00195C19.9651 6.00195 24.0001 10.037 24.0001 15.002C24.0001 19.967 19.9651 24.002 15.0001 24.002Z'
          fill='CurrentColor'
        />
        <path
          d='M15 12.752C12.255 12.752 9.88496 14.402 8.83496 16.772L10.275 17.252C11.13 15.482 12.915 14.252 15 14.252C16.26 14.252 17.385 14.717 18.285 15.467L16.5 17.252H21V12.752L19.365 14.387C18.195 13.367 16.68 12.752 15 12.752Z'
          fill='CurrentColor'
        />
      </svg>
    </Icon>
  );
};

export default BudgetIcon;
