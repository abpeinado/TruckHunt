import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './truckListReducers.js';

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading
});
