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
