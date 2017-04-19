import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { truckList, truckListHasErrored, truckListIsLoading } from './truckListReducers.js';
import { truckInfo, truckInfoHasErrored, truckInfoIsLoading } from './truckInfoReducers.js';
import { truckLoc, truckLocHasErrored, truckLocIsLoading } from './truckLocReducers.js';
import { mapCenter } from './mapCenterReducers.js';
import { truckSelected } from './truckSelectedReducers.js';
import { wantsSignup, signupError, signupLoading, signupSuccess, signup } from './signupReducers.js';
import { vendorIncomingOrder, vendorIncomingOrderHasErrored, vendorIncomingOrderIsLoading } from './vendorIncomingOrderReducers.js';
import { addedToCart, removedFromCart } from './cartReducers';
import { loginError, loginSuccess, loginLoading } from './loginReducers.js';
import { submittedOrder, submitOrderHasErrored, submitOrderIsLoading } from './paymentReducers.js';

export default combineReducers({
  truckList,
  truckListHasErrored,
  truckListIsLoading,
  truckInfo,
  truckInfoHasErrored,
  truckInfoIsLoading,
  truckSelected,
  mapCenter,
  truckLoc,
  truckLocHasErrored,
  truckLocIsLoading,
  signup,
  signupSuccess,
  signupError,
  signupLoading,
  loginError,
  loginLoading,
  loginSuccess,
  wantsSignup,
  vendorIncomingOrder,
  vendorIncomingOrderHasErrored,
  vendorIncomingOrderIsLoading,
  addedToCart,
  removedFromCart,
  submittedOrder,
  submitOrderHasErrored,
  submitOrderIsLoading,
  router: routerReducer
});
