import { categoriesTitle } from "@/data/categoriesTitle";
import { endpoinst } from "@/data/endpoints";
import { Category } from "@/types/Category";
import axios from "axios";

const API_KEY = '02884dd877348ea6644bebb8c6af282c'
const options = {method: 'GET', headers: {accept: 'application/json'}};
const req = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const getOriginals = async (): Promise<Category> => {

    const result = await req.get(`/discover/movie?&with_networks=213&year=2022&language=pt-BR&api_key=${API_KEY}`)
    const category = result.data as Category
    category.name = 'Originals';
    return category;

}

export const getCategories = async () => {

    let categories: Category[] = [];

    for(let i in endpoinst){

        const result = await req.get(`${endpoinst[i].content}&api_key=${API_KEY}`);
        const category = result.data as Category
        category.name = categoriesTitle[i];
        categories.push(category);

    }

    return categories;

}