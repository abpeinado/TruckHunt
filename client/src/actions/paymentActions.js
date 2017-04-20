export function submitOrderHasErrored(bool) {
  return {
    type: 'SUBMIT_ORDER_HAS_ERRORED',
    submitOrderHasErrored: bool
  };
}

export function submitOrderIsLoading(bool) {
  return {
    type: 'SUBMIT_ORDER_LOADING',
    submitOrderIsLoading: bool
  };
}

export function submitOrderSuccess(order) {
  return {
    type: 'SUBMIT_ORDER_SUCCESS',
    order
  };
}

export function submitOrder(orderInfo) {
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      orderInfo
    })
  };
  return (dispatch) => {
    dispatch(submitOrderIsLoading(true));
    fetch('/checkout', init)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(submitOrderIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(order => dispatch(submitOrderSuccess(order)))
      .catch(() => dispatch(submitOrderHasErrored(true)));
  };
}
