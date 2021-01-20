import {
    FETCH_USERS_BY_USERNAME_REQUEST, 
    FETCH_USERS_BY_USERNAME_SUCCESS, 
    FETCH_USERS_BY_USERNAME_FAILED
} from './types';

const initialState = {
    usersByUsername: [],
    loading: false
}

export const usersByUsernameReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_BY_USERNAME_REQUEST: 
            return {...state, loading: true};
        case FETCH_USERS_BY_USERNAME_SUCCESS:
            return {...state, usersByUsername: action.payload, loading: false};
        case FETCH_USERS_BY_USERNAME_FAILED:
            return {...state, loading: false};
        default:
            return state;
    }
}