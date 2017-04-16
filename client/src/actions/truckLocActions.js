export function truckLocHasErrored(bool) {
  return {
    type: 'TRUCK_LOC_HAS_ERRORED',
    truckLocHasErrored: bool
  };
}

export function truckLocIsLoading(bool) {
  return {
    type: 'TRUCK_LOC_IS_LOADING',
    truckLocIsLoading: bool
  };
}

export function truckLocFetchDataSuccess(truckLoc) {
  return {
    type: 'TRUCK_LOC_FETCH_DATA_SUCCESS',
    truckLoc
  };
}

export function truckLocFetchData(url) {
  return (dispatch) => {
    dispatch(truckLocIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(truckLocIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(truckLoc => dispatch(truckLocFetchDataSuccess(truckLoc)))
      .catch(() => dispatch(truckLocHasErrored(true)));
  };
}
