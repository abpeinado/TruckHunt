import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = initialState => createStore(
  reducers,
  initialState,
  applyMiddleware(thunk),
);

export default configureStore;
