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
        } else if (response.status === 202) {
          // 202 Successful Vendor Login
          dispatch(vendorLoginSuccess(true));
        } else if (response.status === 401) {
          // 404 Cannot Resolve Auth
          throw new Error('Cannot Authenticate Credentials');
        }
        return response;
      })
      .catch(() => dispatch(loginError(true)));
  };
}
