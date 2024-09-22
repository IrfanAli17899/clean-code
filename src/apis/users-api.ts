import { apiAxios } from "@/libs/axios";

// Centralized all user related apis using the shared Axios instance
export const getUser = async (userId: string) => {
    try {
        const response = await apiAxios.get(`/users/${userId}`);
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error };
    }
};