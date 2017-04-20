export function submitOrderError(code, message) {
  return {
    type: 'SUBMIT_ORDER_HAS_ERRORED',
    submitOrderError: {
      code,
      message
    }
  };
}

export function submitOrderProcessing(bool) {
  return {
    type: 'SUBMIT_ORDER_PROCESSING',
    submitOrderProcessing: bool
  };
}

export function submitOrderSuccess(submittedOrder) {
  return {
    type: 'SUBMIT_ORDER_SUCCESS',
    submittedOrder
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
    dispatch(submitOrderProcessing(true));
    fetch('/checkout', init)
      .then((res) => {
        if (!res.ok) {
          dispatch(submitOrderError(res.status, res.statusText));
        }
        dispatch(submitOrderProcessing(false));
        return res;
      })
      .then(res => res.json()) // convert res.body stream to object
      .then(submittedOrder => dispatch(submitOrderSuccess(submittedOrder)));
  };
}
