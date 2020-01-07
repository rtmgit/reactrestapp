import { put, call } from 'redux-saga/effects';
import { validateUserLoginService, fetchPublicationsDataService } from '../ServiceHelpers/UserAuthenticationServiceHelper';
import {setMyCookie} from '../Utils/CookiesHelper';

import * as types from '../Actions/ActionTypes';
import * as myProps from '../Utils/MyProperties';


export function* validateUserLoginSaga(payload) {
  try {
    const response = yield call(validateUserLoginService, payload);
    
    if(response.authenticated && response.message === 'OK'){
        setMyCookie(myProps.TOKEN_NAME, response.skey, 1);
        yield put({ type: types.VALIDATE_USER_LOGIN_SUCCESS, response});
    } else {
        yield put({ type: types.VALIDATE_USER_LOGIN_FAILURE, response });
    }
  } catch(error) {
    let errorResp = {status:'-1', message:'Unable to process your request, please try after sometime'}
    yield put({ type: types.VALIDATE_USER_LOGIN_ERROR, errorResp })
  }
}

export function* fetchPublicationsDataSaga(payload) {
try {
  const response = yield call(fetchPublicationsDataService, payload);
  
  if(response.responseHeader.status === 0){
      setMyCookie(myProps.TOKEN_NAME, response.skey, 1);
      yield put({ type: types.FETCH_PUBLICATIONS_DATA_SUCCESS, response});
  } else {
      yield put({ type: types.FETCH_PUBLICATIONS_DATA_FAILURE, response });
  }
} catch(error) {
  console.error("In fetchPublicationsDataSaga, Error response11 - "+error.status+" -* "+error.message);
  let errorResp = {status:'-1', message:'Unable to fetch the data, please try after sometime'}
  yield put({ type: types.FETCH_PUBLICATIONS_DATA_FAILURE, errorResp })
}
}