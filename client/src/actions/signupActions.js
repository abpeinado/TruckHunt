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
        return response;
      })
      .then(response => response.json())
      .then(() => dispatch(signupSuccess(true)))
      .catch(() => dispatch(signupError(true)));
  };
}
