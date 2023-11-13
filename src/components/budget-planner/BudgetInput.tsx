import {Field} from 'formik';
import React from 'react';

import {FormControl, FormErrorMessage, Input} from '@chakra-ui/react';

const BudgetInput = ({
  placeholder,
  value,
}: {
  placeholder: string;
  value: string;
}) => {
  return (
    <Field name={value}>
      {({field, form}: any) => (
        <FormControl isInvalid={form.errors[value] && form.touched[value]}>
          <Input
            width={{lg: '433px', mlg: '497px'}}
            height='50px'
            background='#F5F5F5'
            borderRadius='6px'
            fontFamily='Poppins'
            color='#717171'
            mt='1.2rem'
            placeholder={placeholder}
            {...field}
          />
          <FormErrorMessage>{form.errors[value]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default BudgetInput;
