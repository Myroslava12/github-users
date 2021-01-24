import { call, put } from 'redux-saga/effects';
import {
    FETCH_USERS_SEARCH_SUCCESS,
    FETCH_USERS_SEARCH_FAILED
} from './types';
import {fetchUsersByUsername} from '../../api/axios';

export function* fetchUsersBySearch(action) {
    try {
        const users = yield call(fetchUsersByUsername, action.payload.value, action.payload.page);
        console.log(users, action);
        yield put({type: FETCH_USERS_SEARCH_SUCCESS, payload: users.items});
    } catch(err) {
        yield put({type: FETCH_USERS_SEARCH_FAILED});
    }
}