import { Field } from 'formik';
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

const AuthInput = ({
  type,
  placeholder,
  icon,
  value,
  h,
}: {
  type: string;
  placeholder: string;
  icon: (props: any) => React.JSX.Element;
  value: string;
  h?: string;
}) => {
  return (
    <Field name={value}>
      {({field, form}: any) => (
        <FormControl isInvalid={form.errors[value] && form.touched[value]}>
          <InputGroup height='50px' background='#F5F5F5' borderRadius='6px'>
            <Input
              placeholder={placeholder}
              fontFamily='Poppins'
              fontSize={{base: '12px', lg: '14px'}}
              color='#717171'
              h='100%'
              type={type}
              {...field}
            />
            <InputRightElement pointerEvents='none' h='100%'>
              <Icon as={icon} w='18px' h={h ? h : '14.91px'} />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{form.errors[value]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default AuthInput;
