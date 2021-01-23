import { call, put } from 'redux-saga/effects';
import { 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILED, 
    FETCH_USER_DATA_SUCCESS, 
    FETCH_USER_DATA_FAILED,
    FETCH_USERS_BY_USERNAME_SUCCESS,
    FETCH_USERS_BY_USERNAME_FAILED
} from "./types";
import { fetchUsers, fetchUserData, fetchUsersByUsername } from "../api/axios";

export function* fetchUsersSaga(action) {
    try {
        const users = yield call(fetchUsers, action.payload);
        yield put({type: FETCH_USERS_SUCCESS, payload: users});
    } catch(err) {
        yield put({type: FETCH_USERS_FAILED})
    }
}

export function* fetchUserDataSaga(action) {
    try {
        const userData = yield call(fetchUserData, action.payload);
        yield put({type: FETCH_USER_DATA_SUCCESS, payload: userData});
    } catch (err) {
        console.log(err);
        yield put({type: FETCH_USER_DATA_FAILED})
    }
}

export function* fetchUsersByUsernameSaga(action) {
    try {
        const users = yield call(fetchUsersByUsername, action.payload);
        yield put({type: FETCH_USERS_BY_USERNAME_SUCCESS, payload: users});
    } catch(err) {
        console.log(err);
        yield put({type: FETCH_USERS_BY_USERNAME_FAILED})
    }
}

export function* fetchUsersBySearch(action) {
    try {
        const users = yield call(fetchUsersByUsername, action.payload);
        yield put({type: FETCH_USERS_SUCCESS, payload: users});
    } catch(err) {
        yield put({type: FETCH_USERS_FAILED});
    }
}