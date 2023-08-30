import { configureStore } from "@reduxjs/toolkit";
import { authApi, cvApi } from "./services";
import { userSlice } from "./slices";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [cvApi.reducerPath]: cvApi.reducer,
    [userSlice.name]: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, cvApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
