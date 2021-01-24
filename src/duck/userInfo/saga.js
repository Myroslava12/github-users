import { call, put } from 'redux-saga/effects';
import {
    FETCH_USER_DATA_SUCCESS, 
    FETCH_USER_DATA_FAILED
} from "./types";
import {fetchUserData} from "../../api/axios";

export function* fetchUserDataSaga(action) {
    try {
        const userData = yield call(fetchUserData, action.payload);
        yield put({type: FETCH_USER_DATA_SUCCESS, payload: userData});
    } catch (err) {
        console.log(err);
        yield put({type: FETCH_USER_DATA_FAILED})
    }
}