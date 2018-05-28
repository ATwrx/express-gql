import React from 'react';
import { render } from 'react-dom';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:3001/gql',
  clientState: {

  },
  resolvers: {

  },
  
});

const ApolloApp =  () => (
  <ApolloProvider client={client}>
   <App />
  </ApolloProvider>
)