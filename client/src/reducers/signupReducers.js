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
      return action.signupSucess;
    default:
      return state;
  }
};

export const signup = (state = null, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return action.signup;
    default:
      return state;
  }
};

export const wantsSignup = (state = false, action) => {
  switch (action.type) {
    case 'WANTS_SIGNUP':
      return action.wantsSignup;
    default:
      return state;
  }
};
