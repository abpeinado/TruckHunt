export const vendorIncomingOrderHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'VENDOR_INCOMING_ORDER_HAS_ERRORED':
      return action.vendorIncomingOrderHasErrored;
    default:
      return state;
  }
};

export const vendorIncomingOrderIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'VENDOR_INCOMING_ORDER_IS_LOADING':
      return action.vendorIncomingOrderIsLoading;
    default:
      return state;
  }
};

export const vendorIncomingOrder = (state = [], action) => {
  switch (action.type) {
    case 'VENDOR_INCOMING_ORDER_FETCH_DATA_SUCCESS':
      return action.vendorIncomingOrder;
    default:
      return state;
  }
};
