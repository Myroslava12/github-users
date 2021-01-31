import { call, put } from 'redux-saga/effects';
import { getUsersSuccess, getUsersFailed } from "./action";
import { fetchUsers } from '../../api/axios';

export function* fetchUsersSaga(action) {
    try {
        const users = yield call(fetchUsers, action.payload);
        yield put(getUsersSuccess(users));
    } catch(err) {
        yield put(getUsersFailed())
    }
}