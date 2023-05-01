import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>헤이븐 주간퀘 가이드</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
