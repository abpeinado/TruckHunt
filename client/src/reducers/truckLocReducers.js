export const truckLocHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'TRUCK_LOC_HAS_ERRORED':
      return action.truckLocHasErrored;
    default:
      return state;
  }
};

export const truckLocIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'TRUCK_LOC_IS_LOADING':
      return action.truckLocIsLoading;
    default:
      return state;
  }
};

export const truckLoc = (state = [], action) => {
  switch (action.type) {
    case 'TRUCK_LOC_FETCH_DATA_SUCCESS':
      return action.truckLoc;
    default:
      return state;
  }
};
