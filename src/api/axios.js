import axios from "axios";

export const fetchUsers = async page => {
    try {
        const response = await axios.get(`https://api.github.com/users?since=${page}`);
        return response.data;
    } catch (err) {
        console.log(err);
        return [];
    }
}

export const fetchUserData = async login => {
    try {
        const response = await axios.get(`https://api.github.com/users/${login}`);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export const fetchUsersByUsername = async username => {
    try {
        const response = await axios.get(`https://api.github.com/search/users?q=${username}+in:login&type=users`);
        return response.data.items;
    } catch (err) {
        console.log(err);
        return [];
    }
}