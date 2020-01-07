import React from 'react';
import '../CSS/pages.css';
import { Redirect } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMyCookie} from '../Utils/CookiesHelper';
import * as myProps from '../Utils/MyProperties';
import ListTile from '../Components/ListTile';
import {fetchPublicationsData} from '../Actions/UserAuthenticationActions';

function DashboardPage(){
    const [data, setData] = useState({});
    
    const myStoreData = useSelector((state) => state);
    const dispatch = useDispatch();
    const serviceToken = getMyCookie(myProps.TOKEN_NAME);
    let canUserAccessThisPage = (myStoreData.isUserValid && (serviceToken !== ''));

    function fetchPubsData() {
    
        dispatch(fetchPublicationsData({}));
        //return (<ListTile listData={myStoreData.pubsData} />);
    }
    
    return (
        
        <div className="content">
            {!(myStoreData.pubsData) && fetchPubsData()}
            {!canUserAccessThisPage && <Redirect to='/login' /> }
            {myStoreData.isLogoutInitiated && <Redirect to='/login' />}
            {(myStoreData.pubsData) && (<ListTile listData={myStoreData.pubsData} />) }
        </div>
    );
}

export default DashboardPage;