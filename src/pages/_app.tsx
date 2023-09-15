import '@/styles/globals.css';

import {AppProps} from 'next/app';

import {theme} from '@/constants/theme';
import Layout from '@/layouts/Layout';
import {ChakraProvider} from '@chakra-ui/react';

export default function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
