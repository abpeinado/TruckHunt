export function vendorIncomingOrderHasErrored(bool) {
  return {
    type: 'VENDOR_INCOMING_ORDER_HAS_ERRORED',
    vendorIncomingOrderHasErrored: bool
  };
}

export function vendorIncomingOrderIsLoading(bool) {
  return {
    type: 'VENDOR_INCOMING_ORDER_IS_LOADING',
    vendorIncomingOrderIsLoading: bool
  };
}

export function vendorIncomingOrderFetchDataSuccess(vendorIncomingOrder) {
  return {
    type: 'VENDOR_INCOMING_ORDER_FETCH_DATA_SUCCESS',
    vendorIncomingOrder
  };
}

export function vendorIncomingOrderFetchData(url) {
  return (dispatch) => {
    dispatch(vendorIncomingOrderIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(vendorIncomingOrderIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(truckList => dispatch(vendorIncomingOrderFetchDataSuccess(truckList)))
      .catch(() => dispatch(vendorIncomingOrderHasErrored(true)));
  };
}
