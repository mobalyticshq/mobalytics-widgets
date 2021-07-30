import { GraphQLClient } from 'graphql-hooks';

// todo: move url to env var
const staticDataClient = new GraphQLClient({
  url: 'https://cf-gql-proxy.mobalytics.workers.dev/lol-static-gql',
  headers: {
    'Accept-Language': 'en_us',
  }
});

// todo: move url to env var
const dynamicDataClient = new GraphQLClient({
  url: 'https://cf-gql-proxy.mobalytics.workers.dev/lol-gql',
  headers: {
    'Accept-Language': 'en_us',
  }
});

export const lolApi = { staticDataClient, dynamicDataClient };
