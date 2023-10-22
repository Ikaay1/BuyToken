import {useRouter} from 'next/router';
import React, {useRef, useState} from 'react';

import CardIcon from '@/assets/CardIcon';
import CloseIcon from '@/assets/CloseIcon';
import HouseIcon from '@/assets/HouseIcon';
import LogoutIcon from '@/assets/LogoutIcon';
import PencilIcon from '@/assets/PencilIcon';
import TransactionIcon from '@/assets/TransactionIcon';
import {useAppDispatch, useAppSelector} from '@/redux/app/hooks';
import {useUploadProfilePictureMutation} from '@/redux/services/user.service';
import {logout, setUserProfile} from '@/redux/slices/authSlice';
import {
  Box,
  Divider,
  Flex,
  Icon,
  Image,
  Skeleton,
  Text,
  useToast,
} from '@chakra-ui/react';
import {googleLogout} from '@react-oauth/google';

const Sidebar = ({onClose}: {onClose?: () => void}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement | any>();
  const [url, setUrl] = useState('');
  const name = useAppSelector((state) => state?.app?.user?.userProfile?.name);
  const phone = useAppSelector(
    (state) => state?.app?.user?.userProfile?.mobileNumber,
  );
  const [uploadProfilePicture, uploadProfilePictureStatus] =
    useUploadProfilePictureMutation();
  const toast = useToast();
  const profileUrl = useAppSelector(
    (state) => state?.app?.user?.userProfile?.profilePics,
  );

  const handleLogout = () => {
    dispatch(logout());
    googleLogout();
    window.location.href = '/login';
  };

  const handleChoose = () => {
    inputRef.current.click();
  };

  return (
    <>
      <Flex
        w={{base: '316px', lg: '300px', mlg: '316px'}}
        justifyContent={'space-between'}
        flexDirection={'column'}
        background='#FAF9F6'
        h='100%'
      >
        <Box w='100%' pt='.8rem'>
          <Flex
            mx='1.5rem'
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Image
              src='/assets/bt_logo.png'
              w={{base: '47px', lg: '86px'}}
              h={{base: '46px', lg: '84px'}}
              alt='Bt logo'
            />
            <Icon
              onClick={onClose}
              as={CloseIcon}
              w='17.5px'
              h='17.5px'
              display={{lg: 'none'}}
            />
          </Flex>
          <Box ml='1.7rem' mt='4rem'>
            <Flex alignItems={'center'} pr='.6rem'>
              <Box position={'relative'} mr='.7rem'>
                <Image
                  src={
                    url
                      ? url
                      : profileUrl
                      ? profileUrl
                      : '/assets/dummy_profilepic.png'
                  }
                  alt='Default profile image'
                  w='116px'
                  h='116px'
                  borderRadius={'50%'}
                  objectFit={'cover'}
                />
                {uploadProfilePictureStatus?.isLoading ? (
                  <Skeleton
                    w='29px'
                    h='29px'
                    borderRadius={'50%'}
                    position={'absolute'}
                    right='0'
                    bottom='0'
                  ></Skeleton>
                ) : (
                  <Image
                    src='/assets/camera.png'
                    alt='Default profile image'
                    position={'absolute'}
                    right='0'
                    bottom='0'
                    cursor='pointer'
                    onClick={handleChoose}
                  />
                )}

                <input
                  ref={inputRef}
                  type='file'
                  onChange={(e: any) => {
                    console.log('imageFile', e.target.files[0]);
                    const imageFile = e.target.files[0];
                    if (
                      imageFile?.type === 'image/jpeg' ||
                      imageFile?.type === 'image/png'
                    ) {
                      setUrl(URL.createObjectURL(imageFile));
                      const myFormData = new FormData();
                      myFormData.append('file', imageFile);
                      uploadProfilePicture(myFormData).then((res: any) => {
                        console.log('uploadProfile', res);
                        if (res?.data?.data) {
                          toast({
                            title: 'Profile picture successfully updated',
                            description:
                              'Your profile picture has been successfully updated',
                            status: 'success',
                            duration: 8000,
                            isClosable: true,
                            position: 'top-right',
                          });
                          dispatch(
                            setUserProfile({
                              payload: {
                                data: res?.data?.data,
                              },
                            }),
                          );
                        } else {
                          toast({
                            title: 'Upload failed',
                            description:
                              res?.error?.data?.message ||
                              'Something went wrong',
                            status: 'error',
                            duration: 8000,
                            isClosable: true,
                            position: 'top-right',
                          });
                          setUrl('');
                        }
                      });
                    } else {
                      toast({
                        title: 'Image type error',
                        description: 'Please choose a jpeg or png image type',
                        status: 'error',
                        duration: 8000,
                        isClosable: true,
                        position: 'top-right',
                      });
                    }
                  }}
                  accept='image/png, image/jpeg'
                  style={{
                    display: 'none',
                  }}
                />
              </Box>
              <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                  <Text
                    fontFamily='Raleway'
                    fontStyle='normal'
                    fontWeight='700'
                    fontSize='18px'
                    lineHeight='26px'
                    color='#1E1E1F'
                  >
                    {name?.split(' ')[0]}
                  </Text>
                  <Text
                    fontFamily='Raleway'
                    fontStyle='normal'
                    fontWeight='500'
                    fontSize='14px'
                    lineHeight='26px'
                    color='#1E1E1F'
                  >
                    {phone}
                  </Text>
                </Box>
                <Icon ml='.65rem' as={PencilIcon} />
              </Flex>
            </Flex>
          </Box>
          <Box mt='2rem'>
            {[
              {name: 'Dashboard', icon: HouseIcon, route: '/dashboard'},
              {name: 'Pay Utility Bills', icon: CardIcon, route: '/utility'},
              {
                name: 'Transaction History',
                icon: TransactionIcon,
                route: '/transaction-history',
              },
            ].map(({name, icon, route}) => (
              <Flex
                alignItems={'center'}
                py='.8rem'
                key={name}
                bg={route === router.asPath ? '#4CAD73' : undefined}
                pl='1.7rem'
                cursor={'pointer'}
                onClick={() => router.push(route)}
              >
                <Icon
                  mr='1.1rem'
                  as={icon}
                  color={route === router.asPath ? '#FFFFFF' : '#4CAD73'}
                />
                <Text
                  fontFamily='Inter'
                  fontWeight='500'
                  color={route === router.asPath ? '#FFFFFF' : '#929292'}
                >
                  {name}
                </Text>
              </Flex>
            ))}
          </Box>
        </Box>
        <Box>
          <Divider mb='.95rem' width='100%' border='1px solid #CCCCCC' />
          <Flex
            alignItems={'center'}
            pl='1.45rem'
            pb='2rem'
            onClick={handleLogout}
            cursor='pointer'
          >
            <Icon as={LogoutIcon} w='18px' h='17px' mr='.7rem' />
            <Text fontFamily='Inter' fontSize='18px' color='#929292'>
              Logout
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Sidebar;
