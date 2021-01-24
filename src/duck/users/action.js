import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED
} from "./types";

export const getUsersRequest = (payload) => {
    return {
        type: FETCH_USERS_REQUEST,
        payload
    }
}

export const getUsersFailed = () => {
    return {
        type: FETCH_USERS_FAILED
    }
}

export const getUsersSuccess = (payload) => {
    return {
        type: FETCH_USERS_SUCCESS, 
        payload,
    }
}