/* eslint import/prefer-default-export: 0 */
export const truckSelected = (state = {}, action) => {
  switch (action.type) {
    case 'TRUCK_SELECTED':
      return action.truck;
    default:
      return state;
  }
};
