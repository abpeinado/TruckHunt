export const userWantsLandingPage = (state = true, action) => {
  switch (action.type) {
    case 'USER_WANTS_LANDING_PAGE':
      return action.userWantsLandingPage;
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
