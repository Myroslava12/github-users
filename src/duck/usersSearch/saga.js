import { call, put } from 'redux-saga/effects';
import {
    FETCH_USERS_SEARCH_SUCCESS,
    FETCH_USERS_SEARCH_FAILED,
    FETCH_USERS_SEARCH_NEXT_SUCCESS
} from './types';
import {fetchUsersByUsername} from '../../api/axios';

export function* fetchUsersBySearch(action) {
    try {
        const users = yield call(fetchUsersByUsername, action.payload.value, action.payload.page);
        yield put({type: FETCH_USERS_SEARCH_SUCCESS, payload: users.items});
    } catch(err) {
        yield put({type: FETCH_USERS_SEARCH_FAILED});
    }
}

export function* fetchUsersBySearchNext(action) {
    try {
        const users = yield call(fetchUsersByUsername, action.payload.value, action.payload.page);
        yield put({type: FETCH_USERS_SEARCH_NEXT_SUCCESS, payload: users.items});
    } catch(err) {
        yield put({type: FETCH_USERS_SEARCH_FAILED});
    }
}