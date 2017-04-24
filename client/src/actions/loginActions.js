// No longer using this file, instead swithcing all signup/login actions to the signupActions file
// merged in respective reducers as well into the signup reducers and importing the accordingly where needed

import fetch from 'isomorphic-fetch';

export function loginError(bool) {
  return {
    type: 'LOGIN_ERROR',
    loginError: bool
  };
}

export function loginLoading(bool) {
  return {
    type: 'LOGIN_LOADING',
    loginLoading: bool
  };
}

export function loginSuccess(bool) {
  return {
    type: 'LOGIN_SUCCESS',
    loginSuccess: bool
  };
}

export function vendorLoginSuccess(bool) {
  return {
    type: 'VENDOR_LOGIN_SUCCESS',
    vendorLoginSuccess: bool
  };
}

// export function setUserID (userID) {
//   return {
//     type: 'SET_USERID',
//     setUserID: userID
//   }
// }

export function loginAttempt(userInfo) {
  const url = userInfo.url;
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userInfo
    })
  };

  return (dispatch) => {
    dispatch(loginLoading(true));
    fetch(url, init)
      .then((response) => {
        dispatch(loginLoading(false));
        if (response.status === 200) {
          // 200 Successful User Login
          dispatch(loginSuccess(true));
          console.log('inside successful login beudy', response);
          // console.log('inside successful login beudy',  response.customer_id);
          // console.log(typeof dispatch);
          // console.log(typeof dispatch(setUserID));
        } else if (response.status === 202) {
          // 202 Successful Vendor Login
          dispatch(vendorLoginSuccess(true));
        } else if (response.status === 401) {
          // 404 Cannot Resolve Auth
          throw new Error('Cannot Authenticate Credentials');
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('inside loginAttempt, response', data[0].customer_id);
        // dispatch(setUserID(data[0].customer_id));
      })
      .catch(() => dispatch(loginError(true)));
  };
}
