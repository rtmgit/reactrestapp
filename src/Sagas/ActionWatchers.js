import { takeLatest } from 'redux-saga/effects';
import { validateUserLoginSaga, fetchPublicationsDataSaga } from './UserAuthenticationSaga';
import { fork } from 'redux-saga/effects';

import * as types from '../Actions/ActionTypes';


export function* watchUserAuthentication() {
  yield takeLatest(types.VALIDATE_USER_LOGIN_REQUEST, validateUserLoginSaga);
  yield takeLatest(types.FETCH_PUBLICATIONS_DATA_REQUEST, fetchPublicationsDataSaga);
}

export default function* startForman() {
    yield fork(watchUserAuthentication);
}