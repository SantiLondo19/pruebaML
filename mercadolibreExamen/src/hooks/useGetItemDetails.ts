import { useMutation } from "@tanstack/react-query";
import { getItemDetailsAPI } from "../apis/getItemDetails";
import { useSetItemDetails } from "../store/itemsStore/useSetItemDetails";


const getItemDetails = async (id: string) => {
    const { data } = await getItemDetailsAPI.get(`/${id}`);
    return data;
}

const getItemDescription = async (id: string) => {
    const { data } = await getItemDetailsAPI.get(`/${id}/description`);
    return data;
}

export const useGetItemDetails = () => {
    const setDetails = useSetItemDetails((state) => state.setDetails);
    
    return useMutation({
        onSuccess: (data) => {
            setDetails(data);
        },
        onError: (error) => {
            console.error(error);
        },
        mutationFn: (id: string) => getItemDetails(id)
    })
}

export const useGetItemDescription = () => {
    const setDescription = useSetItemDetails((state) => state.setDescription);
    return useMutation({
        onSuccess: (data) => {
            setDescription(data);
        },
        onError: (error) => {
            console.error(error);
        },
        mutationFn: (id: string) => getItemDescription(id)
    })
}
