export function userWantsLandingPage(bool) {
  return {
    type: 'USER_WANTS_LANDING_PAGE',
    userWantsLandingPage: bool
  };
}

export function userWantsLogin(bool) {
  return {
    type: 'USER_WANTS_LOGIN',
    userWantsLogin: bool
  };
}

export function userWantsSearch(bool) {
  return {
    type: 'USER_WANTS_SEARCH',
    userWantsSearch: bool
  };
}

export function userWantsAdmin(bool) {
  return {
    type: 'USER_WANTS_ADMIN',
    userWantsAdmin: bool
  };
}

export function userWantsCheckout(bool) {
  return {
    type: 'USER_WANTS_CHECKOUT',
    userWantsCheckout: bool
  };
}

export function userID(num) {
  return {
    type: 'USER_ID',
    userID: num
  };
}
