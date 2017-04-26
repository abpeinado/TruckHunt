export function truckListHasErrored(bool) {
  return {
    type: 'TRUCK_LIST_HAS_ERRORED',
    truckListHasErrored: bool
  };
}

export function truckListIsLoading(bool) {
  return {
    type: 'TRUCK_LIST_IS_LOADING',
    truckListIsLoading: bool
  };
}

export function truckListFetchDataSuccess(truckList) {
  return {
    type: 'TRUCK_LIST_FETCH_DATA_SUCCESS',
    truckList
  };
}

export function truckListFetchData(url, coordinates, date) {
  return (dispatch) => {
    dispatch(truckListIsLoading(true));
    const dateParsed = date;
    const coordinatesParsed = coordinates;
    // console.log('action coordinates', coordinatesParsed);
    // console.log('action date', dateParsed);
    const reqBody = { coordinates: coordinatesParsed, date: dateParsed };
    // console.log('reqBody', reqBody);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    };
    // console.log('OPTIONS', options);
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(truckListIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(truckList => {
        dispatch(truckListFetchDataSuccess(truckList));
      })
      .catch(() => dispatch(truckListHasErrored(true)));
  };
}
