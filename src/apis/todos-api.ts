import { apiAxios } from "@/libs/axios";

// Centralized all todos related apis using the shared Axios instance
export const getTodos = async () => {
    try {
        const response = await apiAxios.get(`/todos`);
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error };
    }
};