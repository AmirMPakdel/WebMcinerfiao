import 'antd/dist/antd.css';
import {ChestComponent} from '../utils/chest';
import Head from 'next/head';
import 'react-nestable/dist/styles/index.css'


function MyApp({ Component, pageProps }) {
  return(
  <>
    <Head>

      <link rel="stylesheet" href="/styles/global.css"/>
      <link rel="stylesheet" href="/styles/colors.css"/>
      <link rel="stylesheet" href="/styles/fonts.css"/>
      <link rel="stylesheet" href="/styles/forced.css"/>
      <link rel="stylesheet" href="/styles/shadows.css"/>

      <script src="/js/env.js"/>
      <script src="/js/poly.js"/>

      {/* <link rel="apple-touch-icon" sizes="57x57" href="/statics/root/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/statics/root/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/statics/root/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/statics/root/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/statics/root/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/statics/root/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/statics/root/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/statics/root/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/statics/root/apple-icon-180x180.png"/>

      <link rel="icon" type="image/png" sizes="36x36"  href="/statics/root/android-icon-36x36.png"/>
      <link rel="icon" type="image/png" sizes="48x48"  href="/statics/root/android-icon-48x48.png"/>
      <link rel="icon" type="image/png" sizes="72x72"  href="/statics/root/android-icon-72x72.png"/>
      <link rel="icon" type="image/png" sizes="96x96"  href="/statics/root/android-icon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="144x144"  href="/statics/root/android-icon-144x144.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/statics/root/android-icon-192x192.png"/>

      <link rel="icon" type="image/png" sizes="32x32" href="/statics/root/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/statics/root/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/statics/root/favicon-16x16.png"/> 

      <link rel="manifest" href="/statics/root/manifest.json"/> 
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/statics/root/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"/> */}

    </Head>
    <ChestComponent/>
    <Component {...pageProps}/>
  </>
  )
}

export default MyApp;


