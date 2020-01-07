import {encodeText, decodeText} from './TextEncodeDecodeHelper';
export function setMyCookie(cname, cvalue, hours) {
    let d = new Date();
    d.setTime(d.getTime() + (hours * 60 * 60 * 1000)); // (exdays * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + d.toUTCString();
    cvalue = encodeText(cvalue);
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
  
export function getMyCookie(cname){
    return decodeText(getCookie(cname));
}

  export function getCookie(cname) {
    let name = cname + '=';
    let ca = document.cookie.split(';');
    
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) ===' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
  
    return '';
  }
  
  export function validateMyCookie(cname) {
    let user = getMyCookie(cname);
    if (user !== '') {
      return user;
    } else {
      return null;
    }
  }

  export function expireMyCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1992 00:00:01 GMT;';
  }
  