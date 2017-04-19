/* eslint import/prefer-default-export: 0 */
export const addToCart = itemID => ({
  type: 'ADD_TO_CART',
  itemID
});

export const removeFromCart = menuItem => ({
  type: 'REMOVE_FROM_CART',
  menuItem
});

// export function checkoutProcessing(bool) {
//   return {
//     type: 'CHECKOUT_IS_PROCESSING',
//     checkoutIsProcessing: bool
//   };
// }

// export function checkoutHasErrored(bool) {
//   return {
//     type: 'CHECKOUT_HAS_ERRORED',
//     checkoutHasErrored: bool
//   };
// }

// export function checkoutSuccess(truckList) {
//   return {
//     type: 'CHECKOUT_SUCCESS',
//     truckList
//   };
// }

// export function chckoutCart(cartItems) {
//   const init = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       cartItems
//     })
//   };
//   return (dispatch) => {
//     dispatch(checkoutProcessing(true));
//     fetch('/checkout', init)
//       .then((response) => {
//         dispatch(checkoutProcessing(false));
//         return response;
//       })
//       .then(() => dispatch(checkoutSuccess(true)))
//       .catch(() => dispatch(checkoutHasErrored(true)));
//   };
// }
