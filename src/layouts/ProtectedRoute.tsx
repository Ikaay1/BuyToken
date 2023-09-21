import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// import { FacebookLoginClient } from '@greatsumini/react-facebook-login';
// import { googleLogout } from '@react-oauth/google';
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { logout } from '@/redux/slices/authSlice';
import { useToast } from '@chakra-ui/react';

const ProtectedRoute = ({children}: {children: any}) => {
  const router = useRouter();
  const toast = useToast();
  const accessToken = useAppSelector((state) => state?.app?.user?.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      if (!accessToken) {
        router.push(`/login`);
      } else if (accessToken) {
        // check if the token is expired
        const decodedToken: any = jwtDecode(accessToken);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          toast({
            title: 'Session expired ',
            position: 'top-right',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
          dispatch(logout());
          //   googleLogout();
          //   FacebookLoginClient.logout(() => {});
          window.location.href = '/login';
        }
      }
    }
  }, [accessToken]);

  return <>{children}</>;
};

export default ProtectedRoute;
