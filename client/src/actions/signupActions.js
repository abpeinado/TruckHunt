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
          console.log('responseSIGNUPFETCH', response.json());
          dispatch(vendorSignupError(true));
          throw new Error('Could not create new user');
        } else if (response.status === 401) {
          dispatch(signupError(true));
          throw new Error('Could not create new user');
        }
        return response;
      })
      .catch((error) => console.error(error));
  };
}
