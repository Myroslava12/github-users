import {FETCH_USERS_REQUEST, FETCH_USER_DATA_REQUEST, FETCH_USERS_BY_USERNAME_REQUEST, FETCH_USERS_BY_SEARCH} from "./types";
import { all, takeEvery } from 'redux-saga/effects';
import {fetchUserDataSaga, fetchUsersSaga, fetchUsersByUsernameSaga, fetchUsersBySearch} from "./saga";

function* sagaSagas() {
    yield all([
        yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga),
        yield takeEvery(FETCH_USER_DATA_REQUEST, fetchUserDataSaga),
        yield takeEvery(FETCH_USERS_BY_USERNAME_REQUEST, fetchUsersByUsernameSaga),
        yield takeEvery(FETCH_USERS_BY_SEARCH, fetchUsersBySearch)
    ])
}

export default sagaSagas;