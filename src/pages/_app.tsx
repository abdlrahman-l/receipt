import axios from 'axios'
import emotionReset from 'emotion-reset'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import App from 'next/app'
import { Provider as StoreProvider } from 'react-redux'
// import '../styles/globals.css'
import { PersistGate } from 'redux-persist/integration/react'

import { css, Global } from '@emotion/react'

import store from '../config/redux-store'
import { Categories } from '../types'

function MyApp({ Component, pageProps }) {

  const newPageProps = {...pageProps}

  return (
    <StoreProvider store={store}>
      <Global
        styles={css`
          ${emotionReset}

          html {
            box-sizing: border-box;
          }
        
          *, *:before, *:after {
            box-sizing: border-box;
          }
        
          * {
            -webkit-overflow-scrolling: touch;
          }
        
          body {
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            margin: 0;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            text-align: left;
            background-color: #fff;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -moz-font-feature-settings: "liga" on;
            color: rgba(0, 0, 0, 0.84);
            min-width: "100vw" 
          }

          button {
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont,
              'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
              sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
              'Segoe UI Symbol', 'Noto Color Emoji';
            font-size: 14px;
          }   

        /** Montserrat Thin **/
        @font-face {
          font-family: 'Montserrat';
          font-display: swap;
          font-weight: 100;
          font-style: normal;
          src: url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-Thin.subset.woff2') format('woff2'),
            url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-Thin.subset.woff') format('woff');
          unicode-range: U+20-22, U+25-27, U+2C-3F, U+41-5A, U+61-7A, U+A9;
        }

        /** Montserrat Light **/
        @font-face {
          font-family: 'Montserrat';
          font-display: swap;
          font-weight: 300;
          font-style: normal;
          src: url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-Light.subset.woff2') format('woff2'),
            url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-Light.subset.woff') format('woff');
          unicode-range: U+20-22, U+25-27, U+2C-3F, U+41-5A, U+61-7A, U+A9;
        }

        /** Montserrat Regular **/
        @font-face {
          font-family: 'Montserrat';
          font-display: swap;
          font-weight: 400;
          font-style: normal;
          src: url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-Regular.subset.woff2') format('woff2'),
            url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-Regular.subset.woff') format('woff');
          unicode-range: U+20-22, U+25-27, U+2C-3F, U+41-5A, U+61-7A, U+A9;
        }

        /** Montserrat Regular-Italic **/
        @font-face {
          font-family: 'Montserrat';
          font-display: swap;
          font-weight: 400;
          font-style: italic;
          src: url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-Italic.subset.woff2') format('woff2'),
            url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-Italic.subset.woff') format('woff');
          unicode-range: U+20-22, U+25-27, U+2C-3F, U+41-5A, U+61-7A, U+A9;
        }

        /** Montserrat Bold-Italic **/
        @font-face {
          font-family: 'Montserrat';
          font-display: swap;
          font-weight: 700;
          font-style: italic;
          src: url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-BoldItalic.woff2') format('woff2'),
            url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-BoldItalic.woff') format('woff');
          unicode-range: U+20-22, U+25-27, U+2C-3F, U+41-5A, U+61-7A, U+A9;
        }

        /** Montserrat Medium **/
        @font-face {
          font-family: 'Montserrat';
          font-display: swap;
          font-weight: 500;
          font-style: normal;
          src: url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-Medium.subset.woff2') format('woff2'),
            url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-Medium.subset.woff') format('woff');
          unicode-range: U+20-22, U+25-27, U+2C-3F, U+41-5A, U+61-7A, U+A9;
        }

        /** Montserrat SemiBold **/
        @font-face {
          font-family: 'Montserrat';
          font-display: swap;
          font-weight: 600;
          font-style: normal;
          src: url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-SemiBold.subset.woff2') format('woff2'),
            url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-SemiBold.subset.woff') format('woff');
          unicode-range: U+20-22, U+25-27, U+2C-3F, U+41-5A, U+61-7A, U+A9;
        }

        /** Montserrat Bold **/
        @font-face {
          font-family: 'Montserrat';
          font-display: swap;
          font-weight: 700;
          font-style: normal;
          src: url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-Bold.subset.woff2') format('woff2'),
            url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-Bold.subset.woff') format('woff');
          unicode-range: U+20-22, U+25-27, U+2C-3F, U+41-5A, U+61-7A, U+A9;
        }

        /** Montserrat ExtraBold **/
        @font-face {
          font-family: 'Montserrat';
          font-display: swap;
          font-weight: 800;
          font-style: normal;
          src: url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-ExtraBold.subset.woff2') format('woff2'),
            url('https://dsme5yydjxl37.cloudfront.net/fonts/Montserrat-ExtraBold.subset.woff') format('woff');
          unicode-range: U+20-22, U+25-27, U+2C-3F, U+41-5A, U+61-7A, U+A9;
        }

          body {
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          body::-webkit-scrollbar { 
            display: none;  /* Safari and Chrome */
          }

          input {
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont,
              'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
              sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
              'Segoe UI Symbol', 'Noto Color Emoji';
          }
        `}
      />
    <PersistGate
      persistor={store.__PERSISTOR}
      loading={null}
    >
      <Component {...newPageProps} />
    </PersistGate>
  </StoreProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp
