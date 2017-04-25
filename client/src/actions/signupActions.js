import fetch from 'isomorphic-fetch';

export function signupError(bool) {
  return {
    type: 'SIGNUP_ERROR',
    signupError: bool
  };
}

export function signupLoading(bool) {
  return {
    type: 'SIGNUP_LOADING',
    signupLoading: bool
  };
}

export function vendorSignupError(bool) {
  return {
    type: 'VENDOR_SIGNUP_ERROR',
    vendorSignupError: bool
  };
}

export function signupSuccess(bool) {
  return {
    type: 'SIGNUP_SUCCESS',
    signupSuccess: bool
  };
}

export function setUsername(username) {
  return {
    type: 'SET_USERNAME',
    setUsername: username
  };
}

export function setUserID(userID) {
  return {
    type: 'SET_USERID',
    setUserID: userID
  };
}

export function signupFetch(userInfo) {
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
    dispatch(signupLoading(true));
    fetch(url, init)
      .then((response) => {
        dispatch(signupLoading(false));
        if (response.status === 201) {
          dispatch(signupSuccess(true));
        } else if (response.status === 400) {
          dispatch(vendorSignupError(true));
          throw new Error('Could not create new user');
        } else if (response.status === 401) {
          dispatch(signupError(true));
          throw new Error('Could not create new user');
        }
        return response;
      })
      .then(response => response.json())
      .then((response) => {
        if (response.customer_id) {
          dispatch(setUserID(response.customer_id));
        } else {
          dispatch(setUserID(response[0].vendor_id));
        }
      })
      .catch((error) => console.error(error));
  };
}

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
        if (data[0].customer_id) {
          dispatch(setUserID(data[0].customer_id));
        } else {
          dispatch(setUserID(data[0].vendor_id));
        }
      })
      .catch(() => dispatch(loginError(true)));
  };
}

// export function logoutUser(bool) {
//   return {
//     type: 'LOGOUT_USER',
//     logoutUser: bool
//   };
// };