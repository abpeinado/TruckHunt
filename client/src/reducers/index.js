import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { truckList, truckListHasErrored, truckListIsLoading } from './truckListReducers.js';
import { truckInfo, truckInfoHasErrored, truckInfoIsLoading } from './truckInfoReducers.js';
import { truckLoc, truckLocHasErrored, truckLocIsLoading } from './truckLocReducers.js';
import { wantsSignup, signupError, signupLoading, signupSuccess, signup } from './signupReducers.js';
import { vendorIncomingOrder, vendorIncomingOrderHasErrored, vendorIncomingOrderIsLoading } from './vendorIncomingOrderReducers.js';
import { addedToCart } from './cartReducers';

export default combineReducers({
  truckList,
  truckListHasErrored,
  truckListIsLoading,
  truckInfo,
  truckInfoHasErrored,
  truckInfoIsLoading,
  truckLoc,
  truckLocHasErrored,
  truckLocIsLoading,
  signup,
  signupSuccess,
  signupError,
  signupLoading,
  wantsSignup,
  vendorIncomingOrder,
  vendorIncomingOrderHasErrored,
  vendorIncomingOrderIsLoading,
  addedToCart,
  router: routerReducer
});
