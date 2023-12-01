import React from 'react';

import {Icon} from '@chakra-ui/react';

const AddIcon = (props: any) => {
  return (
    <Icon viewBox='0 0 20 20' {...props}>
      <svg
        width='20'
        height='20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10 18C5.59 18 2 14.41 2 10C2 5.59003 5.59 2.00003 10 2.00003C14.41 2.00003 18 5.59003 18 10C18 14.41 14.41 18 10 18ZM10 3.05176e-05C8.68678 3.05176e-05 7.38642 0.258688 6.17317 0.761235C4.95991 1.26378 3.85752 2.00038 2.92893 2.92896C1.05357 4.80433 0 7.34787 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7363 6.17317 19.2388C7.38642 19.7414 8.68678 20 10 20C12.6522 20 15.1957 18.9465 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68681 19.7413 7.38645 19.2388 6.1732C18.7362 4.95994 17.9997 3.85755 17.0711 2.92896C16.1425 2.00038 15.0401 1.26378 13.8268 0.761235C12.6136 0.258688 11.3132 3.05176e-05 10 3.05176e-05ZM11 5.00003H9V9.00003H5V11H9V15H11V11H15V9.00003H11V5.00003Z'
          fill='CurrentColor'
        />
      </svg>
    </Icon>
  );
};

export default AddIcon;
