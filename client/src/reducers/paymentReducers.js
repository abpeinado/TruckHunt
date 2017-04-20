export const submitOrderHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'SUBMIT_ORDER_HAS_ERRORED':
      return action.submitOrderHasErrored;
    default:
      return state;
  }
};

export const submitOrderIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'SUBMIT_ORDER_IS_LOADING':
      return action.submitOrderIsLoading;
    default:
      return state;
  }
};

export const submittedOrder = (state = null, action) => {
  switch (action.type) {
    case 'SUBMIT_ORDER_SUCCESS':
      return action.order;
    default:
      return state;
  }
};
