import * as types from '../Actions/ActionTypes';


const initialData = {
    isUserValid: false,
    isLogoutInitiated: false,
    username: ''
}

export  default function RootReducer(state = initialData, action){
    const response = action.response;
    switch(action.type) {
        case types.VALIDATE_USER_LOGIN_SUCCESS:
            return { ...state, isUserValid: true, isLogoutInitiated: false, message: response.message, username: response.user.username };
        case types.VALIDATE_USER_LOGIN_FAILURE:
            return { ...state,  isUserValid: false, message: response.message };
        case types.VALIDATE_USER_LOGIN_ERROR:
            return { ...state,  isUserValid: false, message: response.message };
        case types.LOGOUT_USER:
            return { ...state,  isUserValid: false, isLogoutInitiated: true, message: 'Logout Successful' };    
        case types.INVALIDATE_USER_LOGIN_SESSION:
            return { ...state,  isUserValid: false, message: 'Your session is expired, please login again' };
        case types.FETCH_PUBLICATIONS_DATA_SUCCESS:
            return { ...state,  isUserValid: true, pubsData: response.response.docs, message: 'SUCCESS' };
        case types.FETCH_PUBLICATIONS_DATA_FAILURE:
            return { ...state,  isUserValid: true, message: 'Unable to fetch the data, please try again later' };       
        default:
            return state;
    }
}