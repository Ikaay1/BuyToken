import {Field} from 'formik';
import React from 'react';

import {
  Box,
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

const UpdateProfileInput = ({
  placeholder,
  icon,
  value,
  type,
}: {
  placeholder: string;
  icon: (props: any) => React.JSX.Element;
  value: string;
  type?: string;
}) => {
  return (
    <Field name={value}>
      {({field, form}: any) => (
        <FormControl isInvalid={form.errors[value] && form.touched[value]}>
          <InputGroup
            border={'none'}
            outline='none'
            borderRadius={'6px'}
            background={'#F5F5F5'}
            width={{base: '100%', lg: '480px', mlg: '570px'}}
            mt='1.55rem'
          >
            <Input
              height='50px'
              border={'none'}
              outline='none'
              fontFamily='Poppins'
              color='#717171'
              focusBorderColor='white'
              fontSize={{base: '12px', lg: '16px'}}
              placeholder={placeholder}
              type={type ? type : undefined}
              {...field}
            />
            <InputRightElement pointerEvents='none' h='100%'>
              <Icon as={icon} />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{form.errors[value]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default UpdateProfileInput;
