import {
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILED
} from "./types";

const initialState = {
    users: [],
    loading: false,
    since: 0,
    err: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {...state, loading: true, since: action.payload};
        case FETCH_USERS_SUCCESS: 
            const filteredData = action.payload.filter((item) => !state.users.find((el) => el.id === item.id));
            return {...state, users: [...state.users, ...filteredData], loading: false};
        case FETCH_USERS_FAILED: 
            return {...state, loading: false, err: true};
        default:
            return state;
    }
}