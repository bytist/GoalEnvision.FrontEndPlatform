import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

import { NextPage } from 'next'
import { PrismicLink } from 'apollo-link-prismic'
import React from 'react'
import fetch from 'node-fetch';
import { abortableFetch } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

global.fetch = abortableFetch(fetch).fetch;
export const withApollo = (Comp: NextPage) => (props: any) => {
  return (
    <ApolloProvider client={getApolloClient(null, props.apolloState)}>
      <Comp />
    </ApolloProvider>
  )
}

export const getApolloClient = (
  ctx?: unknown,
  initialState?: NormalizedCacheObject
) => {
  const httpLink = PrismicLink({
    uri: 'https://goalenvisionapp.prismic.io/graphql',
  })
  const cache = new InMemoryCache().restore(initialState || {})
  return new ApolloClient({
    ssrMode: true,
    link: httpLink,
    cache,
  })
}
