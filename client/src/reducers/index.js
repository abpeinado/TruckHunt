import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { truckList, truckListHasErrored, truckListIsLoading } from './truckListReducers.js';
import { truckInfo, truckInfoHasErrored, truckInfoIsLoading } from './truckInfoReducers.js';
import { truckLoc, truckLocHasErrored, truckLocIsLoading } from './truckLocReducers.js';
import { mapCenter } from './mapCenterReducers.js';
import { vendorSignupError, signupError, signupLoading, signupSuccess } from './signupReducers.js';
import { vendorIncomingOrder, vendorIncomingOrderHasErrored, vendorIncomingOrderIsLoading } from './vendorIncomingOrderReducers.js';
import { addedToCart, removedFromCart } from './cartReducers';
import { submittedOrder, submitOrderHasErrored, submitOrderIsLoading } from './paymentReducers.js';
import { loginError, loginSuccess, loginLoading, vendorLoginSuccess } from './loginReducers.js';
import { userID, userName } from './userReducers.js';

export default combineReducers({
  truckList,
  truckListHasErrored,
  truckListIsLoading,
  truckInfo,
  truckInfoHasErrored,
  truckInfoIsLoading,
  mapCenter,
  truckLoc,
  truckLocHasErrored,
  truckLocIsLoading,
  signupSuccess,
  signupError,
  signupLoading,
  loginError,
  loginLoading,
  loginSuccess,
  vendorLoginSuccess,
  vendorSignupError,
  vendorIncomingOrder,
  vendorIncomingOrderHasErrored,
  vendorIncomingOrderIsLoading,
  addedToCart,
  removedFromCart,
  submittedOrder,
  submitOrderHasErrored,
  submitOrderIsLoading,
  userID,
  userName,
  router: routerReducer
});

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))
