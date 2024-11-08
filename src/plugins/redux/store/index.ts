import rootReducer from "@/plugins/redux/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../rtk/auth";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authApi.middleware)
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { store };