import { useQuery } from "@tanstack/react-query";
import { GET_PRODUCT_COLLECTIONS } from "../consts/getCollections";
import { graphqlClient } from "../graphqlClient";

const USE_GET_COLLECTIONS = 'use-Fetch-Collections';

export const useGetCollections = () => {
    const { data, error, isError, isPending } = useQuery({
        queryKey: [USE_GET_COLLECTIONS],
        queryFn: async () => {
            const result = await graphqlClient.request(GET_PRODUCT_COLLECTIONS);
            return result;
        },
    });

    return {
        //@ts-expect-error
        collections: data?.collections?.items,
        error,
        isCollectionsFetching: isPending,
        isError,
    };
};
