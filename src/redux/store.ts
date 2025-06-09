import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";
import middleware from "./middleware";

const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export type AppStore = typeof Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
