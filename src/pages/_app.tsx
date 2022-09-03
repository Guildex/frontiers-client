import { SSRProvider } from '@react-aria/ssr';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import { SITE_NAME } from '~/const/app';
import { GlobalCSS } from '~/theme/GlobalCSS';
import { ResetCSS } from '~/theme/ResetCSS';
import { ThemesProvider } from '~/theme/ThemesProvider';

const DynamicGoogleFontLoader = dynamic(() => import('~/theme/GoogleFont'), {
  ssr: false,
});

// eslint-disable-next-line @typescript-eslint/naming-convention
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <NextSeo titleTemplate={`%s | ${SITE_NAME}`} />
      <ResetCSS />
      <GlobalCSS />
      <DynamicGoogleFontLoader />
      <ThemesProvider>
        <Component {...pageProps} />
      </ThemesProvider>
    </SSRProvider>
  );
}

export default MyApp;
