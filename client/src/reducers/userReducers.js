export const userWantsLandingPage = (state = true, action) => {
  switch (action.type) {
    case 'USER_WANTS_LANDING_PAGE':
      return action.userWantsLandingPage;
    default:
      return state;
  }
};

export const userWantsLogin = (state = false, action) => {
  switch (action.type) {
    case 'USER_WANTS_LOGIN':
      return action.userWantsLogin;
    default:
      return state;
  }
};

export const userWantsAdmin = (state = false, action) => {
  switch (action.type) {
    case 'USER_WANTS_ADMIN':
      return action.userWantsAdmin;
    default:
      return state;
  }
};

export const userWantsSearch = (state = false, action) => {
  switch (action.type) {
    case 'USER_WANTS_SEARCH':
      return action.userWantsSearch;
    default:
      return state;
  }
};

export const userWantsCheckout = (state = false, action) => {
  switch (action.type) {
    case 'USER_WANTS_CHECKOUT':
      return action.userWantsCheckout;
    default:
      return state;
  }
};

export const userID = (state = 0, action) => {
  switch (action.type) {
    case 'USER_ID':
      return action.userID;
    default:
      return state;
  }
};

export const userName = (state = '', action) => {
  switch (action.type) {
    case 'USER_NAME':
      return action.userName;
    default:
      return state;
  }
};
