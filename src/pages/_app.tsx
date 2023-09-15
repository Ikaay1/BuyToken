import '@/styles/globals.css';

import {AppProps} from 'next/app';
import {Router} from 'next/router';
import {useEffect} from 'react';

import {theme} from '@/constants/theme';
import Layout from '@/layouts/Layout';
import {ChakraProvider} from '@chakra-ui/react';

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
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
