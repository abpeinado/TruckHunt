import { combineReducers } from 'redux';
import { truckList, truckListHasErrored, truckListIsLoading } from './truckListReducers.js';

export default combineReducers({
  truckList,
  truckListHasErrored,
  truckListIsLoading,
  truckInfo,
  truckInfoHasErrored,
  truckInfoIsLoading
});
