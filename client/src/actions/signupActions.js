export function wantsSignup(bool) {
  return {
    type: 'WANTS_SIGNUP',
    wantsSignup: bool
  };
}

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

export function signupSuccess(response) {
  return {
    type: 'SIGNUP_SUCCESS',
    signupSuccess: response
  };
}

export function signup(userInfo) {
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
    fetch('/truckSignup', init)
      .then((response) => {
        dispatch(signupLoading(false));
        dispatch(signupSuccess(true));
        return response;
      })
      .then(response => response.json())
      .then(response => dispatch(signupSuccess(response)))
      .catch(() => dispatch(signupError(true)));
  };
}
