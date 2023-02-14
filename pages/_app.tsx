import '@assets/styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Component {...pageProps} key={router.asPath} />
  );
}

export default MyApp;