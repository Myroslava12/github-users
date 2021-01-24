import { call, put } from 'redux-saga/effects';
import {
    FETCH_USERS_BY_USERNAME_SUCCESS,
    FETCH_USERS_BY_USERNAME_FAILED
} from './types';
import {fetchUsersByUsername} from "../../api/axios";

export function* fetchUsersByUsernameSaga(action) {
    try {
        const users = yield call(fetchUsersByUsername, action.payload.value, action.payload.page);
        yield put({type: FETCH_USERS_BY_USERNAME_SUCCESS, payload: users});
    } catch(err) {
        console.log(err);
        yield put({type: FETCH_USERS_BY_USERNAME_FAILED})
    }
}
