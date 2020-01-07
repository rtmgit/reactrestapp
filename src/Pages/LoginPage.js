import React, { useState } from 'react';
//import connect from 'react-redux';
//import { connect } from 'react-redux';
//import loginStore from '../Stores/LoginStore';
import validateUserLogin from '../Actions/UserAuthenticationActions';
//import {setMyCookie} from '../Utils/CookiesHelper';
import { Redirect } from 'react-router-dom';
import '../CSS/pages.css';
import {useSelector, useDispatch} from 'react-redux';
import SignIn from '../Components/SignIn';

function LoginPage(){
    const [signDtls, setSignDtls] = useState({username: '', password: ''});
    let isLoginSuccess = false, message = "";
    const myStoreData = useSelector((state) => state);
    const dispatch = useDispatch();

    if (myStoreData.hasOwnProperty('isUserValid')) {
        isLoginSuccess = myStoreData.isUserValid;
        message = myStoreData.message;
    }

    const onInputChange = (event) => {
        setSignDtls({...signDtls, [event.target.name]: event.target.value});
    }

    const onLoginSubmit = (event) => {
        event.preventDefault();
    
        dispatch(validateUserLogin(signDtls));
    }
    return (
        <div className="loginPage">
            { !isLoginSuccess ? <div className="form-element"><span className="errorMsg">{message}</span></div> : <Redirect to='/myDashboard' />}
            <SignIn onInputChange={onInputChange} onLoginSubmit={onLoginSubmit} />
        </div>
    );
}
export default LoginPage;