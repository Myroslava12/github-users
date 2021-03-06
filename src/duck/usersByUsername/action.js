import {
    FETCH_USERS_BY_USERNAME_REQUEST, 
    FETCH_USERS_BY_USERNAME_SUCCESS, 
    FETCH_USERS_BY_USERNAME_FAILED
} from "./types";

export const getUsersByUsernameRequest = (value, page) => {
    return {
        type: FETCH_USERS_BY_USERNAME_REQUEST,
        payload: {
            value, 
            page
        }
    }
}

export const getUsersByUsernameSuccess = (payload) => {
    return {
        type: FETCH_USERS_BY_USERNAME_SUCCESS,
        payload
    }
}

export const getUsersByUsernameFailed = () => {
    return {
        type: FETCH_USERS_BY_USERNAME_FAILED
    }
}
