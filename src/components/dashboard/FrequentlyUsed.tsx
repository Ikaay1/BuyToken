import {useRouter} from 'next/router';
import React, {useState} from 'react';

import BulbIcon from '@/assets/BulbIcon';
import CancelIcon from '@/assets/CancelIcon';
import ComputerIcon from '@/assets/ComputerIcon';
import EditIcon from '@/assets/EditIcon';
import InternetIcon from '@/assets/InternetIcon';
import PhoneIcon from '@/assets/PhoneIcon';
import {useAppDispatch, useAppSelector} from '@/redux/app/hooks';
import {setUtility} from '@/redux/slices/serviceSlice';
import {Box, Flex, Icon, Skeleton, Text} from '@chakra-ui/react';

import EditUtilities from './EditUtilities';
import UpdateUtilities from './UpdateUtilities';

const FrequentlyUsed = () => {
  const utilities =
    useAppSelector((state) => state?.app?.user?.userProfile?.favBillers) || [];
  console.log('utilities', utilities);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <Box
      width={{lg: '48%'}}
      height={{lg: '223px'}}
      background='#FFFFFF'
      borderRadius={{lg: '10px'}}
      pl='.8rem'
      pr='1.5rem'
      py={{base: '1.3rem', lg: '.9rem'}}
      mt={{base: '1.45rem', lg: 0}}
    >
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Text
          fontSize={{base: '14px', lg: '16px'}}
          fontFamily='Inter'
          fontWeight='500'
          color='#313131'
        >
          Frequently used
        </Text>
        {utilities?.length > 0 && !edit && (
          <Icon
            as={EditIcon}
            onClick={() => setEdit(true)}
            cursor='pointer'
            w='12px'
            h='12px'
          />
        )}
        {edit && (
          <Flex
            onClick={() => setEdit(false)}
            cursor='pointer'
            alignItems={'center'}
          >
            <Icon as={CancelIcon} w='7px' h='7px' mr='.3rem' />
            <Text fontFamily='Poppins' fontSize='10px' color='#929292'>
              Cancel
            </Text>
          </Flex>
        )}
      </Flex>
      <Flex mt='1.6rem' justifyContent={'space-between'}>
        {loading
          ? [1, 2, 3, 4].map((each) => (
              <Skeleton
                key={each}
                w={{base: '21%', lg: '23%'}}
                maxWidth='82.23px'
                height={{base: '75px', md: '83.69px'}}
              ></Skeleton>
            ))
          : [...utilities, ...Array(4 - utilities.length).keys()].map((each) =>
              typeof each === 'number' ? (
                <Flex
                  w={{base: '21%', lg: '23%'}}
                  maxWidth='82.23px'
                  height={{base: '75px', md: '83.69px'}}
                  background='#F5F5F5'
                  borderRadius='4.70398px'
                  justifyContent={'center'}
                  alignItems={'center'}
                  key={each}
                >
                  <EditUtilities setLoading={setLoading} />
                </Flex>
              ) : (
                <Box key={each} w={{base: '20%', lg: 'auto'}}>
                  <Flex
                    width={{base: '100%', lg: '82.23px'}}
                    height={{base: '68.35px', lg: '83.69px'}}
                    background='#DBEFE3'
                    borderRadius='4.70398px'
                    justifyContent={'center'}
                    alignItems={'center'}
                    cursor='pointer'
                    position={'relative'}
                    onClick={() => {
                      dispatch(setUtility({payload: {name: each}}));
                      router.push('/utility');
                    }}
                  >
                    <Icon
                      as={
                        each === 'Electricity'
                          ? BulbIcon
                          : each === 'Airtime'
                          ? PhoneIcon
                          : each === 'Data'
                          ? InternetIcon
                          : ComputerIcon
                      }
                      w={{base: '14.17px', lg: '28.78px'}}
                      h={{base: '20px', lg: '41.84px'}}
                    />
                    {edit && (
                      <UpdateUtilities utility={each} setLoading={setLoading} />
                    )}
                  </Flex>
                  <Text
                    fontFamily='Poppins'
                    fontSize={{base: '12px', lg: '13px'}}
                    textAlign='center'
                    color='#313131'
                    mt='.5rem'
                  >
                    {each}
                  </Text>
                </Box>
              ),
            )}
      </Flex>
      {!utilities?.length && (
        <Text
          width='339px'
          fontFamily='Inter'
          fontWeight='500'
          fontSize={{base: '11px', lg: '12px'}}
          lineHeight='170%'
          textAlign='center'
          color='#929292'
          mx='auto'
          mt='.7rem'
        >
          Click on the each card to add 4 of your frequently used utility bill
          payments here for quick and easy access
        </Text>
      )}
    </Box>
  );
};

export default FrequentlyUsed;
