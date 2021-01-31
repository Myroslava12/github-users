import { call, put } from 'redux-saga/effects';
import { getUserDataSuccess, getUserDataFailed } from "./action";
import { fetchUserData } from "../../api/axios";

export function* fetchUserDataSaga(action) {
    try {
        const userData = yield call(fetchUserData, action.payload);
        yield put(getUserDataSuccess(userData));
    } catch (err) {
        console.log(err);
        yield put(getUserDataFailed());
    }
}