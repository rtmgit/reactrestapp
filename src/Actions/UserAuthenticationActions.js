import * as types from './ActionTypes';
import * as myProps from '../Utils/MyProperties';
import { expireMyCookie } from '../Utils/CookiesHelper';

function validateUserLogin(user) {
    return {
      type: types.VALIDATE_USER_LOGIN_REQUEST,
      user
    }
};

export function inValidateUserLogin(user = {}) {
    expireMyCookie(myProps.TOKEN_NAME);
    return {
      type: types.INVALIDATE_USER_LOGIN_SESSION,
      user
    }
}

export function logoutUser(user = {}) {
  expireMyCookie(myProps.TOKEN_NAME);
  return {
    type: types.LOGOUT_USER,
    user
  }
}

export function fetchPublicationsData(actionData = {}) {
  return {
    type: types.FETCH_PUBLICATIONS_DATA_REQUEST,
    actionData
  }
}


export default validateUserLogin;