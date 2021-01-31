import { call, put } from 'redux-saga/effects';
import { getUsersSearchSuccess, getUsersSearchNextSuccess, getUsersSearchFailed } from "./action";
import { fetchUsersByUsername } from '../../api/axios';

export function* fetchUsersBySearch(action) {
    try {
        const users = yield call(fetchUsersByUsername, action.payload.value, action.payload.page);
        yield put(getUsersSearchSuccess(users.items));
    } catch(err) {
        yield put(getUsersSearchFailed());
    }
}

export function* fetchUsersBySearchNext(action) {
    try {
        const users = yield call(fetchUsersByUsername, action.payload.value, action.payload.page);
        yield put(getUsersSearchNextSuccess(users.items));
    } catch(err) {
        yield put(getUsersSearchFailed());
    }
}