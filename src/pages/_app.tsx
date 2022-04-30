import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Layout } from "~/components/templates/Layout";

import { ResetCSS } from "~/theme/ResetCSS";

const DynamicGoogleFontLoader = dynamic(() => import("~/theme/GoogleFont"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetCSS />
      <DynamicGoogleFontLoader />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
