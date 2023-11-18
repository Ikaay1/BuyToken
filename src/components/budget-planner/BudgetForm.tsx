import {Form, Formik} from 'formik';
import React from 'react';
import * as Yup from 'yup';

import {useSetBudgetMutation} from '@/redux/services/budget.service';
import {Box, Button, Flex} from '@chakra-ui/react';

import BudgetInput from './BudgetInput';

const BudgetForm = () => {
  const [setBudget, setBudgetStatus] = useSetBudgetMutation();
  return (
    <Box mt='.9rem'>
      <Formik
        initialValues={{
          electricity: '',
          airtime: '',
          data: '',
          cabletv: '',
        }}
        enableReinitialize
        validationSchema={Yup.object({
          electricity: Yup.number()
            .required('Electricity is Required')
            .typeError('Electricity must be a number'),
          airtime: Yup.number()
            .required('Airtime is Required')
            .typeError('Airtime must be a number'),
          data: Yup.number()
            .required('Data is Required')
            .typeError('Data must be a number'),
          cabletv: Yup.number()
            .required('Cable TV is Required')
            .typeError('Cable TV must be a number'),
        })}
        onSubmit={async ({electricity, airtime, data, cabletv}) => {
          const res: any = await setBudget({
            electricity: Number(electricity),
            airtime: Number(airtime),
            data: Number(data),
            cableTv: Number(cabletv),
          });
          console.log('res', res);
        }}
      >
        {(props) => (
          <Form>
            {['Electricity', 'Airtime', 'Data', 'CableTV'].map((each) => (
              <BudgetInput
                placeholder={each}
                value={each.toLowerCase()}
                key={each}
              />
            ))}
            <Flex
              justifyContent={{base: 'center', lg: 'flex-end'}}
              mt='1.2rem'
              width={{lg: '433px', mlg: '497px'}}
            >
              <Button
                width={{base: '310px', lg: '132px'}}
                height={{base: '47px', lg: '33px'}}
                background='#417657'
                boxShadow='0px 24.2056px 48.4112px 7.26168px rgba(0, 0, 0, 0.1)'
                borderRadius='5px'
                fontFamily='Raleway'
                fontWeight='600'
                fontSize={{lg: '13px'}}
                color='#FFFFFF'
                type='submit'
                isLoading={setBudgetStatus.isLoading}
              >
                Submit
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default BudgetForm;
