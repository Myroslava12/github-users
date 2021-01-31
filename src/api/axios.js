import { axiosIntance } from "./client";

export const fetchUsers = async page => {
    try {
        const response = await axiosIntance.get(`users?since=${page}`);
        return response.data;
    } catch (err) {
        return [];
    }
}

export const fetchUserData = async login => {
    try {
        const response = await axiosIntance.get(`users/${login}`);
        return response.data;
    } catch (err) {
        return null;
    }
}

export const fetchUsersByUsername = async (username, page) => {
    try {
        const response = await axiosIntance.get(`search/users?q=${username}+in:login&type=users&page=${page}`);
        return response.data;
    } catch (err) {
        return [];
    }
}