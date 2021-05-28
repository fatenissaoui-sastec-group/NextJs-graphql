import '@s/_globals.scss'
import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import { gql } from "@apollo/client";
import client from "./api/apollo-client";




function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
      <ApolloProvider client={client}>

          <Component {...pageProps}></Component>
          </ApolloProvider>
  );
}

export default MyApp
