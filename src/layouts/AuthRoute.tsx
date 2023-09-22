import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAppSelector } from '@/redux/app/hooks';

const AuthRoute = ({children}: {children: any}) => {
  const router = useRouter();
  const accessToken = useAppSelector((state) => state?.app?.user?.token);

  useEffect(() => {
    if (accessToken) {
      router.push(`/home`);
    }
  }, [accessToken]);

  return <>{children}</>;
};

export default AuthRoute;
