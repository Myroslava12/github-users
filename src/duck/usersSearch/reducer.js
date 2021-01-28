import {
    FETCH_USERS_SEARCH_SUCCESS,
    FETCH_USERS_SEARCH_REQUEST,
    FETCH_USERS_SEARCH_FAILED, 
    FETCH_USERS_SEARCH_NEXT_SUCCESS, 
    FETCH_USERS_SEARCH_NEXT_REQUEST
} from "./types";

const initialState = {
    users: [],
    loading: false,
    page: 1,
}

export const usersSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_SEARCH_REQUEST:
            return {...state, loading: true, page: action.payload.page}
        case FETCH_USERS_SEARCH_SUCCESS:
            return {...state, users: [...action.payload], loading: false}
        case FETCH_USERS_SEARCH_NEXT_REQUEST: 
            return {...state, loading: true, page: action.payload.page}
        case FETCH_USERS_SEARCH_NEXT_SUCCESS:
            return {...state, users: [...state.users, ...action.payload], loading: false}
        case FETCH_USERS_SEARCH_FAILED: 
            return {...state, loading: false};
        default:
            return state;
    }
}