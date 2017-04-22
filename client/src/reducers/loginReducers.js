export const loginError = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return action.loginError;
    default:
      return state;
  }
};

export const loginLoading = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_LOADING':
      return action.loginLoading;
    default:
      return state;
  }
};

export const loginSuccess = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.loginSuccess;
    default:
      return state;
  }
};

export const vendorLoginSuccess = (state = false, action) => {
  switch (action.type) {
    case 'VENDOR_LOGIN_SUCCESS':
      return action.vendorLoginSuccess;
    default:
      return state;
  }
};
