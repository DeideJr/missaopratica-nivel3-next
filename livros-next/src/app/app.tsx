import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
  <>
  <head>
    <meta name ='viewport' content = 'width=device-width, initial-scale=1'/>
    </head>
    <Component {...pageProps}/>
    </>
}

export default MyApp;