import {FETCH_USERS_REQUEST} from "./users/types";
import {FETCH_USER_DATA_REQUEST} from "./userInfo/types";
import {FETCH_USERS_BY_USERNAME_REQUEST} from "./usersByUsername/types";
import {FETCH_USERS_SEARCH_REQUEST} from "./usersSearch/types";
import { all, takeEvery } from 'redux-saga/effects';
import {fetchUsersSaga} from "./users/saga";
import {fetchUserDataSaga} from "./userInfo/saga";
import {fetchUsersByUsernameSaga} from "./usersByUsername/saga";
import {fetchUsersBySearch} from "./usersSearch/saga";

function* sagaSagas() {
    yield all([
        yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga),
        yield takeEvery(FETCH_USER_DATA_REQUEST, fetchUserDataSaga),
        yield takeEvery(FETCH_USERS_BY_USERNAME_REQUEST, fetchUsersByUsernameSaga),
        yield takeEvery(FETCH_USERS_SEARCH_REQUEST, fetchUsersBySearch)
    ])
}

export default sagaSagas;