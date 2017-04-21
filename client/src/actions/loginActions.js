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

  // return (dispatch) => {
  //   dispatch(loginLoading(true));
  //   fetch(url, init)
  //     .then((response) => {
  //       dispatch(loginLoading(false));
  //       if (response.length === 0) {
  //         dispatch(loginError(true));
  //       }
  //       console.log('back from server successful FETCH', response);
  //       return response;
  //     })
  //     .then(response => response.json())
  //     .then(response => console.log('responseJSON', response))
  //     .then(() => dispatch(loginSuccess(true)))
  //     .catch(() => dispatch(loginError(true)));
  // };

  return (dispatch) => {
    dispatch(loginLoading(true));
    fetch(url, init)
      // .then((response) => response.json())
      .then((response) => {
        dispatch(loginLoading(false));
        console.log('respsonseFETCH', response);
        if (response.status === 200) {
          dispatch(loginSuccess(true));
        } else {
          throw new Error('Cannot Authenticate Credentials');
        }
        return response;
      })
      .catch(() => dispatch(loginError(true)));
  };
}
