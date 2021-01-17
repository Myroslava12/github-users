import {FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILED} from "./types";

const initialState = {
    userData: {},
    loading: false
}

export const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_DATA_REQUEST:
            return {...state, loading: true};
        case FETCH_USER_DATA_SUCCESS:
            return {...state, userData: action.payload, loading: false};
        case FETCH_USER_DATA_FAILED:
            return {...state, loading: false};
        default: 
            return state;
    }
}