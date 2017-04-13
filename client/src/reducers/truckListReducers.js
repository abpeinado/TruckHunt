export const truckListHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'TRUCK_LIST_HAS_ERRORED':
      return action.truckListHasErrored;
    default:
      return state;
  }
};

export const truckListIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'TRUCK_LIST_IS_LOADING':
      return action.truckListIsLoading;
    default:
      return state;
  }
};

export const truckList = (state = [], action) => {
  switch (action.type) {
    case 'TRUCK_LIST_FETCH_DATA_SUCCESS':
      return action.truckList;
    default:
      return state;
  }
};
