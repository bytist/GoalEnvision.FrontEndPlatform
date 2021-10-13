import '../assets/core/common.less'

import * as React from 'react'

import { AppProps } from 'next/app'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from "react-redux";
import getConfig from 'next/config'
import store from '../store'
import { useApollo } from '../utils/apollo-client'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  const { publicRuntimeConfig } = getConfig()

  return (
    <Provider store={store}>
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_UTH0_DOMAIN}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
        redirectUri={
          process.env.NODE_ENV === 'development'
            ? process.env.NEXT_PUBLIC_REDIRECT_URI
            : publicRuntimeConfig.REDIRECT_URI
        }
        audience={process.env.NEXT_PUBLIC_AUDIENCE}
        cacheLocation="localstorage"
      >
          <Component {...pageProps} />
      </Auth0Provider>
    </Provider>
  )
}

export default CustomApp
