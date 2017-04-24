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

export function vendorIncomingOrderFetchData(url, vendorId) {
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      vendorId
    })
  };
  return (dispatch) => {
    dispatch(vendorIncomingOrderIsLoading(true));
    fetch(url, init)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        dispatch(vendorIncomingOrderIsLoading(false));
        return res;
      })
      .then(res => res.json())
      .then(truckList => dispatch(vendorIncomingOrderFetchDataSuccess(truckList)))
      .catch(() => dispatch(vendorIncomingOrderHasErrored(true)));
  };
}
