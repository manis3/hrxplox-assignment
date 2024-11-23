import { GraphQLClient } from 'graphql-request';

const endPoint = 'https://admin.hyperce.io/shop-api';

export const graphqlClient = new GraphQLClient(endPoint);
