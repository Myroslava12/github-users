import { call, put } from 'redux-saga/effects';
import {
    FETCH_USERS_FAILED, 
    FETCH_USERS_SUCCESS
} from "./types";
import {fetchUsers} from '../../api/axios';

export function* fetchUsersSaga(action) {
    try {
        const users = yield call(fetchUsers, action.payload);
        yield put({type: FETCH_USERS_SUCCESS, payload: users});
    } catch(err) {
        yield put({type: FETCH_USERS_FAILED})
    }
}