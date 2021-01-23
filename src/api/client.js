import axios from "axios";

export const axiosIntance = axios.create({
    baseURL: "https://api.github.com/"
})