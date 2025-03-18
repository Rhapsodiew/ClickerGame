import api from "../api";

export const getUserProfile = async () => {
    return await api.get('/auth/profile').then((response) => response.data)
}