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

export function truckInfoFetchData(truckCategory) {
  return (dispatch) => {
    dispatch(truckInfoIsLoading(true));
    const options = {
      method: 'POST',
      body: {
        food_category: truckCategory
      }
    };
    console.log('should be req bod - truckinfoactions:', options);
    fetch('/menu', options)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(truckInfoIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(truckInfo => dispatch(truckInfoFetchDataSuccess(truckInfo)))
      // .catch(() => dispatch(truckInfoHasErrored(true)));
  };
}
