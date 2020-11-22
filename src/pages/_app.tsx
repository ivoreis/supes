import { Fragment } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import StateManager, { defaultState } from '~/hooks/stateManager'
import Header from '~/components/Header'

import '../tailwind.css'

const CustomApp = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <StateManager initialState={defaultState}>
      <Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <div className="w-full relative mx-auto px-6">
          <Header showNav />
          <Component {...pageProps} />
        </div>
      </Fragment>
    </StateManager>
  )
}

export default CustomApp
