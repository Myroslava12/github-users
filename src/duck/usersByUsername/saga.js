import { call, put } from 'redux-saga/effects';
import { getUsersByUsernameSuccess, getUsersByUsernameFailed } from "./action";
import { fetchUsersByUsername } from "../../api/axios";

export function* fetchUsersByUsernameSaga(action) {
    try {
        const users = yield call(fetchUsersByUsername, action.payload.value, action.payload.page);
        yield put(getUsersByUsernameSuccess(users));
    } catch(err) {
        console.log(err);
        yield put(getUsersByUsernameFailed());
    }
}
