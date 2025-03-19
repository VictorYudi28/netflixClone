import { useQuery } from "@tanstack/react-query";
import { getCategories, getOriginals } from "./api";


export const useOriginals = () => {
    const originals = useQuery({ queryKey: ['originals'], queryFn: getOriginals })
    return originals.data;
}

export const useCategories = () => {
    const categories = useQuery({ queryKey: ['categories'], queryFn: getCategories })
    return categories.data;
}