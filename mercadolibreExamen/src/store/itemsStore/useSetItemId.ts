import { create } from "zustand";

interface UseSetItemId {
    id: string;
    setItemId: (id: string) => void;
}

export const useSetItemId = create<UseSetItemId>((set) => ({
    id: "",
    setItemId: (id) => set({ id }),
}));
