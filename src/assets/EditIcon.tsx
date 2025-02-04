import React from 'react';

import {Icon} from '@chakra-ui/react';

const EditIcon = (props: any) => {
  return (
    <Icon {...props} viewBox='0 0 12 12'>
      <svg
        width='12'
        height='12'
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.37231 4L7.99889 4.62667L1.9464 10.6667H1.33315V10.0533L7.37231 4ZM9.77198 0C9.60533 0 9.43202 0.0666666 9.30537 0.193333L8.08554 1.41333L10.5852 3.91333L11.805 2.69333C12.065 2.43333 12.065 2 11.805 1.75333L10.2452 0.193333C10.1119 0.06 9.94529 0 9.77198 0ZM7.37231 2.12667L0 9.5V12H2.49965L9.87196 4.62667L7.37231 2.12667Z'
          fill='#929292'
        />
      </svg>
    </Icon>
  );
};

export default EditIcon;
