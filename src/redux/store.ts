import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use local storage
import rootReducer from "./reducers";
import middleware from "./middleware";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authedUser"], // Persist only the authedUser state
};

// Cast the rootReducer to match the expected type for redux-persist
const persistedReducer = persistReducer<any>(persistConfig, rootReducer);

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }).concat(middleware),
});

export const persistor = persistStore(Store);
export type AppStore = typeof Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
