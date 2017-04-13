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

export function signupSuccess(bool) {
  console.log('asd;flkjasd;lfkjas;ldkfja;slkdfjas;ldkfj', bool);
  return {
    type: 'SIGNUP_SUCCESS',
    signupSuccess: bool
  };
}

export function signupFetch(userInfo) {
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
        console.log('got it', response);
        return response;
      })
      .then(response => response.json())
      .then(response => console.log('ars;elkjasl;dfkj', response))
      .then(response => dispatch(signupSuccess(true)))
      .catch(() => dispatch(signupError(true)));
  };
}
