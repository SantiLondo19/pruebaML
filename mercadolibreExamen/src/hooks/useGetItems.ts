import { useMutation } from "@tanstack/react-query";
import { getItemsAPI } from "../apis/getItemsApi";
import { ItemResult, useSetItems } from '../store/itemsStore/useSetItems';

const getItems = async (query: string) => {
    const { data } = await getItemsAPI.get<ItemResult>(`/search?q=${query}&limit=4`);
    return { data };
}

export const useGetItems = (searchItem: string) => {
    const setResults = useSetItems((state) => state.setResults);
    return useMutation({
        onSuccess: ({data}) => {
            setResults(data);
        },
        onError: (error) => {
            console.error(error);
        },
        mutationFn: () => getItems(searchItem)
    })
}