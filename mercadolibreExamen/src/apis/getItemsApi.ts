import axios from "axios";

export const getItemsAPI = axios.create({
    baseURL: "https://api.mercadolibre.com/sites/MLA",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});
