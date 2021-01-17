import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED, SHOW_LOADER, HIDE_LOADER, PAGE_COUNTER} from "./types";

const initialState = {
    users: [],
    loading: false,
    page: 0,
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {...state, loading: true};
        case FETCH_USERS_SUCCESS: 
            return {...state, users: [...state.users, ...action.payload], loading: false};
        case FETCH_USERS_FAILED: 
            return {...state, loading: false};
        case SHOW_LOADER: 
            return {...state, loading: true};
        case HIDE_LOADER: 
            return {...state, loading: false};
        case PAGE_COUNTER:
            return {...state, page: state.page + 31}
        default:
            return state;
    }
}