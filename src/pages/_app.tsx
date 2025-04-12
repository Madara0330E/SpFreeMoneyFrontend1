import { SPWorldsProvider } from "../components/SPWorldsProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="frame-ancestors https://spworlds.ru;"
        />
      </Head>
      <SPWorldsProvider>
        <Component {...pageProps} />
      </SPWorldsProvider>
    </>
  );
}

export default MyApp;
