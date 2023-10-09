import axios from 'axios';
import {useRouter} from 'next/router';
import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import {useAppDispatch} from '@/redux/app/hooks';
import {
  useSocialLoginMutation,
  useSocialSignupMutation,
} from '@/redux/services/auth.service';
import {setCredentials} from '@/redux/slices/authSlice';
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
  useToast,
} from '@chakra-ui/react';
import {useGoogleLogin} from '@react-oauth/google';

const Social = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toast = useToast();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login] = useSocialLoginMutation();
  const [signup] = useSocialSignupMutation();
  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('entered login');
      setLoading(true);
      axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse?.access_token}`,
          },
        })
        .then(async (userInfo) => {
          console.log(userInfo);
          if (userInfo?.data?.email) {
            const {name, email} = userInfo.data;
            console.log('userInfo', userInfo);
            if (router.asPath === '/signup') {
              const res: any = await signup({
                name,
                email,
                password: 'aa',
              });
              console.log('resSignupGoogle', res);
              if ('data' in res) {
                const response: any = await login({
                  username: email,
                });
                console.log('resLoginGoogle', response);
                if ('data' in response) {
                  dispatch(
                    setCredentials({
                      payload: {
                        data: res?.data?.data?.user,
                        token: res?.data?.data?.access_token,
                      },
                    }),
                  );
                  router.push('/dashboard');
                  setLoading(false);
                } else {
                  toast({
                    title: 'Login failed',
                    description:
                      res?.error?.data?.message || 'Something went wrong',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top-right',
                  });
                  setLoading(false);
                }
              } else {
                toast({
                  title: 'Register failed',
                  description:
                    res?.error?.data?.message || 'Something went wrong',
                  status: 'error',
                  duration: 3000,
                  isClosable: true,
                  position: 'top-right',
                });
                setLoading(false);
              }
            } else {
              const res: any = await login({
                username: email,
              });
              console.log('resLoginGoogle', res);
              if (res?.data?.data) {
                dispatch(
                  setCredentials({
                    payload: {
                      data: res?.data?.data?.user,
                      token: res?.data?.data?.access_token,
                    },
                  }),
                );
                router.push('/dashboard');
                setLoading(false);
              } else {
                toast({
                  title: 'Login failed',
                  description:
                    res?.error?.data?.message ||
                    res?.data?.message ||
                    'Something went wrong',
                  status: 'error',
                  duration: 3000,
                  isClosable: true,
                  position: 'top-right',
                });
                console.log('res', res);
                setLoading(false);
              }
            }
          }
        });
    },
    onError(errorResponse) {
      console.log(errorResponse);
    },
  });

  const responseFacebook = async (response: any) => {
    console.log('response', response);
    if (response?.accessToken) {
      const {name, email} = response;
      if (router.asPath.includes('/signup')) {
        if (email) {
          setLoading(true);
          signup({
            name,
            email,
            password: 'aa',
          }).then(async (res: any) => {
            if ('data' in res) {
              const response: any = await login({
                username: email,
              });
              console.log('resSignupGoogle', response);
              if ('data' in response) {
                dispatch(
                  setCredentials({
                    payload: {
                      data: res?.data?.data?.user,
                      token: res?.data?.data?.access_token,
                    },
                  }),
                );
                router.push('/dashboard');
                setLoading(false);
              } else {
                toast({
                  title: 'Login failed',
                  description:
                    res?.error?.data?.message || 'Something went wrong',
                  status: 'error',
                  duration: 3000,
                  isClosable: true,
                  position: 'top-right',
                });
                setLoading(false);
              }
            } else {
              toast({
                title: 'Register failed',
                description:
                  res?.error?.data?.message || 'Something went wrong',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
              });
              setLoading(false);
            }
          });
        } else {
          if (name) {
            toast({
              title: 'Error',
              description:
                'No email registered to this facebook account. Please use a facebook account that has an email registered to it to signup',
              status: 'error',
              duration: 7000,
              position: 'top-right',
              isClosable: true,
            });
          }
        }
      } else {
        if (email) {
          setLoading(true);
          login({
            username: email,
          }).then((res: any) => {
            if (res?.data?.data) {
              dispatch(
                setCredentials({
                  payload: {
                    data: res?.data?.data?.user,
                    token: res?.data?.data?.access_token,
                  },
                }),
              );
              router.push('/dashboard');
              setLoading(false);
            } else {
              toast({
                title: 'Login failed',
                description:
                  res?.error?.data?.message ||
                  res?.data?.message ||
                  'Something went wrong',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
              });
              console.log('res', res);
              setLoading(false);
            }
          });
        } else {
          if (name) {
            toast({
              title: 'Error',
              description:
                'No email registered to this facebook account. Please use a facebook account that has an email registered to it and one you have signed up with to login',
              status: 'error',
              duration: 7000,
              position: 'top-right',
              isClosable: true,
            });
          }
        }
      }
    }
  };
  return (
    <Box mt='1.5rem'>
      <Flex justifyContent={'space-between'} alignItems={'flex-end'} mt='.2rem'>
        <Divider
          w='47.5%'
          borderWidth={'1.3px'}
          borderColor={'#CCCCCC'}
        ></Divider>
        <Text
          fontFamily='Poppins'
          fontWeight='600'
          fontSize='14px'
          lineHeight='21px'
          color='#737373'
          alignSelf={'center'}
        >
          Or
        </Text>
        <Divider
          w='47.5%'
          borderWidth={'1.3px'}
          borderColor={'#CCCCCC'}
        ></Divider>
      </Flex>
      <Box
        marginTop={'20px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Button
          onClick={() => loginGoogle()}
          width='60px'
          height='60px'
          background='clique.secondaryGrey4'
          boxShadow='0px 2.8px 14px rgba(0, 0, 0, 0.25)'
          borderRadius='42px'
          display={'flex'}
          justifyContent='center'
          alignItems={'center'}
          cursor='pointer'
          border='none'
          mr='30px'
          p='0'
        >
          <Image
            src={`/assets/google.png`}
            alt={`google icon`}
            width={'27px'}
            height={'27px'}
          />
        </Button>
        <FacebookLogin
          appId={process.env.NEXT_PUBLIC_FACEBOOK_APPID!}
          autoLoad={false}
          fields='name,email,picture'
          // scope='public_profile,email,user_friends'
          callback={(response) => responseFacebook(response)}
          icon='fa-facebook'
          render={(renderProps) => (
            <Button
              onClick={renderProps.onClick}
              disabled={renderProps.isDisabled}
              width='60px'
              height='60px'
              background='clique.secondaryGrey4'
              boxShadow='0px 2.8px 14px rgba(0, 0, 0, 0.25)'
              borderRadius='42px'
              display={'flex'}
              justifyContent='center'
              alignItems={'center'}
              cursor='pointer'
              border='none'
              p='0'
            >
              <Image
                src={`/assets/facebook.png`}
                alt={`facebook icon`}
                width={'37px'}
                height={'37px'}
              />
            </Button>
          )}
        />
      </Box>
    </Box>
  );
};

export default Social;
