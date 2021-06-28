import { createStore, applyMiddleware, compose } from "redux";
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";

// middleware 설정
// (redux-promise, redux-thunk, react devTools Extension 추가)

export default function configureStore(reducer, initialState = {}) {
  const storeEnhancers = compose(
    applyMiddleware(reduxThunk, reduxPromise)
    // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return createStore(reducer, initialState, storeEnhancers);
}
