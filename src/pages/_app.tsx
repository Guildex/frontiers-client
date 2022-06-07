import { SSRProvider } from '@react-aria/ssr';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import { Layout } from '~/components/templates/Layout';
import { GlobalCSS } from '~/theme/GlobalCSS';
import { ResetCSS } from '~/theme/ResetCSS';

const DynamicGoogleFontLoader = dynamic(() => import('~/theme/GoogleFont'), {
  ssr: false,
});

// eslint-disable-next-line @typescript-eslint/naming-convention
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
