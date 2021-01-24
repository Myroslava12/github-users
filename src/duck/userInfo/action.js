import {
    FETCH_USER_DATA_REQUEST,
    FETCH_USER_DATA_SUCCESS, 
    FETCH_USER_DATA_FAILED
} from "./types";

export const getUserDataSuccess = (payload) => {
    return {
        type: FETCH_USER_DATA_SUCCESS, 
        payload,
    }
}

export const getUserDataFailed = () => {
    return {
        type: FETCH_USER_DATA_FAILED
    }
}

export const getUserDataRequest = (payload) => {
    return {
        type: FETCH_USER_DATA_REQUEST,
        payload
    }
}