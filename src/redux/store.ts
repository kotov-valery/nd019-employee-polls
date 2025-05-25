import { createStore, applyMiddleware, compose, AnyAction } from "redux";

import rootReducer from "./reducers";
import middleware from "./middleware";
import { ThunkDispatch } from "redux-thunk";

const ComposeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  rootReducer,
  ComposeEnhancers(applyMiddleware(...middleware))
);

export type AppStore = typeof Store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;

export default Store;
