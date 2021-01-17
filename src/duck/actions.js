import {
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_FAILED, 
    SHOW_LOADER, 
    HIDE_LOADER,
    FETCH_USER_DATA_SUCCESS, 
    FETCH_USER_DATA_REQUEST, 
    FETCH_USER_DATA_FAILED,
    PAGE_COUNTER
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

export const pageCounter = () => {
    return {
        type: PAGE_COUNTER,
    }
}