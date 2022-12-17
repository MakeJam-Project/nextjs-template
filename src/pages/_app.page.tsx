import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import lightTheme from '@/styles/theme';

import defaultNextSeoConfig from '../../next-seo.config';

import '../../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultNextSeoConfig} />
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
