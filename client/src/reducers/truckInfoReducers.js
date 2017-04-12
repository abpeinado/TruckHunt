export const truckInfoHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'TRUCK_INFO_HAS_ERRORED':
      return action.truckInfoHasErrored;
    default:
      return state;
  }
};

export const truckInfoIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'TRUCK_INFO_IS_LOADING':
      return action.truckInfoIsLoading;
    default:
      return state;
  }
};

export const truckInfo = (state = [], action) => {
  switch (action.type) {
    case 'TRUCK_INFO_FETCH_DATA_SUCCESS':
      return action.truckInfo;
    default:
      return state;
  }
};
