import { GraphQLClient } from 'graphql-hooks';

// todo: move url to env var
const staticDataClient = new GraphQLClient({
  url: 'https://extwidget.mobalytics.gg/lol-static-gql',
  headers: {
    'Accept-Language': 'en_us',
    Authorization: 'Bearer 2bd985cc-dc15-4cad-bea7-0c9669751e08',
  }
});

// todo: move url to env var
const dynamicDataClient = new GraphQLClient({
  url: 'https://extwidget.mobalytics.gg/lol-gql',
  headers: {
    'Accept-Language': 'en_us',
    Authorization: 'Bearer 2bd985cc-dc15-4cad-bea7-0c9669751e08',
  }
});

export const lolApi = { staticDataClient, dynamicDataClient };
