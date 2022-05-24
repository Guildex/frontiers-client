import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { Layout } from '~/components/templates/Layout';
import { SSRProvider } from '@react-aria/ssr';

import { ResetCSS } from '~/theme/ResetCSS';
import { GlobalCSS } from '~/theme/GlobalCSS';
import { NextSeo } from 'next-seo';

const DynamicGoogleFontLoader = dynamic(() => import('~/theme/GoogleFont'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <NextSeo titleTemplate="%s | Next React Workbook" />
      <ResetCSS />
      <GlobalCSS />
      <DynamicGoogleFontLoader />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
