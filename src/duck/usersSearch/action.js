import {
    FETCH_USERS_SEARCH_REQUEST, 
    FETCH_USERS_SEARCH_SUCCESS,
    FETCH_USERS_SEARCH_FAILED
} from "./types";

export const getUsersSearch = (value, page) => {
    return {
        type: FETCH_USERS_SEARCH_REQUEST,
        payload: {
            value, page
        }
    }
}

export const getUsersSearchSuccess = (payload) => {
    return {
        type: FETCH_USERS_SEARCH_SUCCESS,
        payload
    }
}

export const getUsersSearchFailed = () => {
    return {
        type: FETCH_USERS_SEARCH_FAILED
    }
}