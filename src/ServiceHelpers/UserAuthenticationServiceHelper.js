import * as ENDPOINTS from './ServiceEndpoints';
import {encodeText} from '../Utils/TextEncodeDecodeHelper'
import { getMyCookie } from '../Utils/CookiesHelper';

export const validateUserLoginService = (request) => {
    let authText = encodeText(request.user.username+":"+request.user.password);
    const parameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authText
        }
    };

    return fetch(ENDPOINTS.VALIDATE_USERLOGIN_API_ENDPOINT, parameters)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        }).catch(error => {
            return {'status':'-1', 'message':'Unable to process your request'};
        });
};

export const fetchPublicationsDataService = (request) => {
    
    const parameters = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'skey': getMyCookie()
        }
    };

    return fetch(ENDPOINTS.FETCH_PUBLICATIONS_API_ENDPOINT, parameters)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        }).catch(error => {
            return {'status':'-1', 'message':'Unable to fetch data, please try after sometime'};
        });
};