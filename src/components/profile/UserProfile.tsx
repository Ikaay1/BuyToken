import React from 'react';

import {Box, Text} from '@chakra-ui/react';

import ChangePassword from './ChangePassword';
import UpdateProfile from './UpdateProfile';

const UserProfile = () => {
  return (
    <Box
      borderRadius='16px'
      bg='#FFFFFF'
      pt='1.4rem'
      pb='1.1rem'
      mt='1.25rem'
      mx={{base: '.5rem', lg: 0}}
      px={{lg: '2.9rem'}}
    >
      <Box>
        <Text
          fontFamily='Raleway'
          fontWeight='700'
          fontSize='20px'
          color='#313131'
        >
          Update Profile
        </Text>
        <UpdateProfile />
      </Box>
      <Box mt='3.3rem'>
        <Text
          fontFamily='Raleway'
          fontWeight='700'
          fontSize='20px'
          color='#313131'
        >
          Change Password
        </Text>
        <ChangePassword />
      </Box>
    </Box>
  );
};

export default UserProfile;
