import { useQuery } from '@tanstack/react-query';
import { graphqlClient } from '../graphqlClient';
import { GET_COLLECTION_PRODUCTS } from '../consts/getCollection';

const USE_GET_COLLECTION = 'use-Fetch-Collection';

export const useGetCollection = ({ slug, page = 1, pageSize = 10 }: { slug: string; page?: number; pageSize?: number }) => {
  const { data, error, isError, isPending } = useQuery({
    queryKey: [USE_GET_COLLECTION, slug],
    queryFn: async () => {
      const result = await graphqlClient.request(GET_COLLECTION_PRODUCTS, {
        slug,
      });
      return result;
    },
  });

  return {
    //@ts-expect-error
    productList: data?.search?.items,
    error,
    isCollectionFetching: isPending,
    isError,
  };
};
