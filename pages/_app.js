import Head from 'next/head';
import { SWRConfig } from 'swr';
import GlobalStyle from '@/styles';

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
