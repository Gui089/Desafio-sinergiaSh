import { api } from "../../api/api";



export async function getCategoriesApi() {

    const response = await api.get('/categories');

    return response.data;
}