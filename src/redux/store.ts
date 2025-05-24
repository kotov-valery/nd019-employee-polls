import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers";
import middleware from "./middleware";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
