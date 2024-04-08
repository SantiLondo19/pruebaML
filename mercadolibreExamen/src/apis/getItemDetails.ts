import axios from "axios";

export const getItemDetailsAPI = axios.create({
    baseURL: "https://api.mercadolibre.com/items",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});
