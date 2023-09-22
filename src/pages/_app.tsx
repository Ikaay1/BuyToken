import '@/styles/globals.css';

import { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { theme } from '@/constants/theme';
import Layout from '@/layouts/Layout';
import { store } from '@/redux/app/store';
import { ChakraProvider } from '@chakra-ui/react';
import { GoogleOAuthProvider } from '@react-oauth/google';

const NProgress = require('nprogress');

export default function App({Component, pageProps}: AppProps) {
  useEffect(() => {
    NProgress.configure({showSpinner: false});
    Router.events.on('routeChangeStart', (url: any) => {
      NProgress.start();
    });
    Router.events.on('routeChangeComplete', (url: any) => {
      NProgress.done();
    });

    Router.events.on('routeChangeError', (url: any) => {
      NProgress.done();
    });
  }, [Router]);
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GoogleOAuthProvider>
      </ChakraProvider>
    </Provider>
  );
}
