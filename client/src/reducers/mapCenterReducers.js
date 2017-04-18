/* eslint import/prefer-default-export: 0 */
export const mapCenter = (state = { lng: -122.408966, lat: 37.783697 }, action) => {
  switch (action.type) {
    case 'MAP_CENTER':
      return action.coordinates;
    default:
      return state;
  }
};
