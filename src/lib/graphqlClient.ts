import { GraphQLClient } from 'graphql-request';

export const gqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!,
  {
    credentials: 'include',
    mode: 'cors'
  }
);
