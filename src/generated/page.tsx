import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import React from 'react';
import { getApolloClient} from '../utils/withApollo';

export async function getServerPageAllStarts
    (options: Omit<Apollo.QueryOptions<Types.AllStartPagesQueryVariables>, 'query'>, ctx? :any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.AllStartPagesQuery>({ ...options, query:Operations.AllStartPagesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState,
                data: data?.data,
                error: data?.error ? data?.errors : null,
            },
        };
      }
export const useAllStarts = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.AllStartPagesQuery, Types.AllStartPagesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.AllStartPagesDocument, options);
};
export type PageAllStartsComp = React.FC<{data?: Types.AllStartPagesQuery, error?: Apollo.ApolloError}>;
export const withPageAllStarts = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.AllStartPagesQuery, Types.AllStartPagesQueryVariables>) => (WrappedComponent:PageAllStartsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.AllStartPagesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrAllStarts = {
      getServerPage: getServerPageAllStarts,
      withPage: withPageAllStarts,
      usePage: useAllStarts,
    }
export async function getServerPageAllSettings
    (options: Omit<Apollo.QueryOptions<Types.AllSettingsQueryVariables>, 'query'>, ctx? :any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.AllSettingsQuery>({ ...options, query:Operations.AllSettingsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState,
                data: data?.data,
                error: data?.error ? data?.errors : null,
            },
        };
      }
export const useAllSettings = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.AllSettingsQuery, Types.AllSettingsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.AllSettingsDocument, options);
};
export type PageAllSettingsComp = React.FC<{data?: Types.AllSettingsQuery, error?: Apollo.ApolloError}>;
export const withPageAllSettings = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.AllSettingsQuery, Types.AllSettingsQueryVariables>) => (WrappedComponent:PageAllSettingsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.AllSettingsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrAllSettings = {
      getServerPage: getServerPageAllSettings,
      withPage: withPageAllSettings,
      usePage: useAllSettings,
    }