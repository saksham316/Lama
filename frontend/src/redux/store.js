import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { projectReducer } from "./project/projectSlice";

// Persist config
const persistConfig = {
  key: "lama",
  storage: storage,
  whitelist: ["auth", "project"], // Add the reducers you want to persist
  blacklist: [], // Add the reducers you do not want to persist
};

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
});

// Create persisted reducer
const reducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: true,
      serializableCheck: false,
    }),
});

// Persistor
const persistor = persistStore(store);

export { store, persistor };
