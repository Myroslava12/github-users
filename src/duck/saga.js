import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED, FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILED} from "./types";
import {fetchUsers, fetchUserData} from "../api/axios";

function* fetchUsersSaga(action) {
    try {
        const users = yield call(fetchUsers, action.payload);
        yield put({type: FETCH_USERS_SUCCESS, payload: users});
    } catch(err) {
        console.log(action)
        yield put({type: FETCH_USERS_FAILED})
    }
}

// export function* mySaga() {
//     yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga);
// }

function* fetchUserDataSaga(action) {
    try {
        const userData = yield call(fetchUserData, action.payload);
        yield put({type: FETCH_USER_DATA_SUCCESS, payload: userData});
    } catch (err) {
        console.log(err);
        yield put({type: FETCH_USER_DATA_FAILED})
    }
}

function* sagaSagas() {
    yield all([
        yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga),
        yield takeEvery(FETCH_USER_DATA_REQUEST, fetchUserDataSaga),
    ])
}

export default sagaSagas;

// export function* sagaUserData() {
//     yield takeEvery(FETCH_USER_DATA_REQUEST, fetchUserDataSaga);
// }