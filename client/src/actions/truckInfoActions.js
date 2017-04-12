export function truckInfoHasErrored(bool) {
  return {
    type: 'TRUCK_INFO_HAS_ERRORED',
    truckInfoHasErrored: bool
  };
}

export function truckInfoIsLoading(bool) {
  return {
    type: 'TRUCK_INFO_IS_LOADING',
    truckInfoIsLoading: bool
  };
}

export function truckInfoFetchDataSuccess(truckInfo) {
  return {
    type: 'TRUCK_INFO_FETCH_DATA_SUCCESS',
    truckInfo
  };
}

export function truckInfoFetchData(truckID) {
  return (dispatch) => {
    dispatch(truckInfoIsLoading(true));
    const options = {
      payload: {
        truckID
      }
    };
    fetch('/truckInfo', options)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(truckInfoIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(truckInfo => dispatch(truckInfoFetchDataSuccess(truckInfo)))
      .catch(() => dispatch(truckInfoHasErrored(true)));
  };
}
