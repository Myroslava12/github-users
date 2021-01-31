import {
    FETCH_USERS_SEARCH_REQUEST, 
    FETCH_USERS_SEARCH_SUCCESS,
    FETCH_USERS_SEARCH_FAILED,
    FETCH_USERS_SEARCH_NEXT_SUCCESS, 
    FETCH_USERS_SEARCH_NEXT_REQUEST
} from "./types";

export const getUsersSearch = (value, page) => {
    return {
        type: FETCH_USERS_SEARCH_REQUEST,
        payload: {
            value, 
            page
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

export const getUsersSearchNextRequest = (value, page) => {
    return {
        type: FETCH_USERS_SEARCH_NEXT_REQUEST, 
        payload: {
            value, 
            page
        }
    }
}

export const getUsersSearchNextSuccess = (payload) => {
    return {
        type: FETCH_USERS_SEARCH_NEXT_SUCCESS,
        payload
    }
}