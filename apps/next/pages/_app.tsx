import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import 'raf/polyfill'
import "@fontsource/roboto";

import { Provider } from 'app/provider'
import { WebNavigation } from 'app/navigation/web'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <WebNavigation>
          <Component {...pageProps} />
        </WebNavigation>
      </Provider>
    </>
  )
}

export default MyApp
