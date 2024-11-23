import { useQuery } from '@tanstack/react-query';
import { graphqlClient } from '../graphqlClient';
import { GET_PRODUCT_OF_PRODUCT } from '../consts/getProduct';

const USE_GET_PRODUCT = 'use-Fetch-Product';

export const useGetProduct = ({ slug, page = 1, pageSize = 10 }: { slug: string; page?: number; pageSize?: number }) => {
  const { data, error, isError, isPending } = useQuery({
    queryKey: [USE_GET_PRODUCT, slug],
    queryFn: async () => {
      const result = await graphqlClient.request(GET_PRODUCT_OF_PRODUCT, {
        slug,
      });

      return result;
    },
    enabled: !!slug,
  });

  return {
    //@ts-expect-error
    product: data?.product,
    error,
    isCollectionFetching: isPending,
    isError,
  };
};
