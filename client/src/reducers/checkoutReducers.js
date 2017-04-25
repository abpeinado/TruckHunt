export const submitOrderError = (state = null, action) => {
  switch (action.type) {
    case 'SUBMIT_ORDER_HAS_ERRORED':
      return action.submitOrderError;
    default:
      return state;
  }
};

export const submitOrderProcessing = (state = false, action) => {
  switch (action.type) {
    case 'SUBMIT_ORDER_PROCESSING':
      return action.submitOrderProcessing;
    default:
      return state;
  }
};

export const submittedOrder = (state = null, action) => {
  switch (action.type) {
    case 'SUBMIT_ORDER_SUCCESS':
      return action.submittedOrder;
    case 'CLEAR_SUBMIT_ORDER_SUCCESS':
      return null;
    default:
      return state;
  }
};
