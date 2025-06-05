import axios from "axios"
import type { UserListResponse } from "../interfaces/reqres.response"

export const getUsers = async (page: number) => {
    try {
        const { data } = await axios.get<UserListResponse>(`https://reqres.in/api/users?page=${page}`);
        return data.data;
    }
    catch (error) {
        console.error("Error fetching users:", error);
        throw error; // Re-throw the error for further handling if needed
    }
}
