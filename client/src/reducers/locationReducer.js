const initialLocation = { pathname: '/', search: '', hash: '' };
const locationReducer = (state = initialLocation, action) => {
  return action.type === 'LOCATION_CHANGE' ?
    action.location : state;
};
