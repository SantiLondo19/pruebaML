import { create } from "zustand";

interface ItemDetailResult {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    currency_id: string;
    condition: string;
}
interface ItemDetailResultDescription {
    plain_text: string;
}

interface useSetItemDetails {
    details: ItemDetailResult;
    description: ItemDetailResultDescription;
    setDetails: (details: ItemDetailResult) => void;
    setDescription: (description: ItemDetailResultDescription) => void;
}


export const useSetItemDetails = create<useSetItemDetails>((set) => ({
    details: {} as ItemDetailResult,
    description: {} as ItemDetailResultDescription,
    setDetails: (details) => set({ details }),
    setDescription: (description) => set({ description }),
}));
