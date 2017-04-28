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
    const reqBody = { coordinates: coordinatesParsed, date: dateParsed };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    };
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
        // NO DUPLICATE TRUCK FILTERING
        const names = truckList.map((truck) => truck.vendor_name);

        const noDupes = truckList.reduce((acc, truck, index) => {
          if (names.lastIndexOf(truck.vendor_name) > index) {
            return acc;
          }
          return [...acc, truck];
        }, []);

        dispatch(truckListFetchDataSuccess(noDupes));
      })
      .catch(() => dispatch(truckListHasErrored(true)));
  };
}
