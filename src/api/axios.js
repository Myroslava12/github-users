import {axiosIntance} from "./client";

export const fetchUsers = async page => {
    try {
        const response = await axiosIntance.get(`users?since=${page}`);
        return response.data;
    } catch (err) {
        console.log(err);
        return [];
    }
}

export const fetchUserData = async login => {
    try {
        const response = await axiosIntance.get(`users/${login}`);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export const fetchUsersByUsername = async username => {
    try {
        const response = await axiosIntance.get(`search/users?q=${username}+in:login&type=users`);
        return response.data.items;
    } catch (err) {
        console.log(err);
        return [];
    }
}