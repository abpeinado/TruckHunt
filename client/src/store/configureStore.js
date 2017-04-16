import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = initialState => createStore(
  reducers,
  initialState,
  applyMiddleware(thunk),
);

export default configureStore;

// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import reducers from '../reducers';

// const configureStore = initialState => createStore(
//   reducers,
//   initialState,
//   composeWithDevTools(
//   applyMiddleware(thunk),
// ));

// export default configureStore;
//