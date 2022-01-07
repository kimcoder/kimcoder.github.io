import React from 'react';
import '@docsearch/css/dist/style.css';
import '../styles/index.css';
import Head from 'next/head';
import { SearchProvider } from 'components/useSearch';

function loadScript(src, attrs = {}) {
  if (typeof document !== 'undefined') {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    Object.keys(attrs).forEach((attr) => script.setAttribute(attr, attrs[attr]));
    script.src = src;
    document.body.appendChild(script);
  }
}

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    loadScript('https://buttons.github.io/buttons.js');
  }, []);

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
        @media (max-width: 390px) {
            .formkit-slide-in {
              display: none;
            }
          }
          @media (max-height: 740px) {
            .formkit-slide-in {
              display: none;
            }
          }
          `,
          }}
        />
      </Head>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </>
  );
}

export default MyApp;
