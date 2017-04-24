export const signupError = (state = false, action) => {
  switch (action.type) {
    case 'SIGNUP_ERROR':
      return action.signupError;
    default:
      return state;
  }
};

export const signupLoading = (state = false, action) => {
  switch (action.type) {
    case 'SIGNUP_LOADING':
      return action.signupLoading;
    default:
      return state;
  }
};

export const signupSuccess = (state = false, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return action.signupSuccess;
    default:
      return state;
  }
};

export const vendorSignupError = (state = false, action) => {
  switch (action.type) {
    case 'VENDOR_SIGNUP_ERROR':
      return action.vendorSignupError;
    default:
      return state;
  }
};

export const setUsername = (state = '', action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return action.setUsername;
    default:
      return state;
  }
};

export const setUserID = (state = 0, action) => {
  switch (action.type) {
    case 'SET_USERID':
      return action.setUserID;
    default:
      return state;
  }
};

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

