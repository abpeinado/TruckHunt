export const userID = (state = 0, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return action.userID;
    default:
      return state;
  }
};

export const userName = (state = '', action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return action.username;
    default:
      return state;
  }
};
