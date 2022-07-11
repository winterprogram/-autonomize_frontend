import axios from "axios";



const API_URL = "http://localhost:8080/api/auth/";

export const loginService = async (username: string, password: string) => {
    return await axios.post(`${API_URL}/base`, { username, password });
}