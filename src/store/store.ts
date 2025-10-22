import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "../features/users/users.slice";
import { authSlice } from "../features/auth/auth.slice";

export const reducer = {
  users: usersSlice.reducer,
  auth: authSlice.reducer,
};

export const store = configureStore({
  reducer,
  devTools: true,
  // devTools: import.meta.env.VITE_APP_ENVIRONMENT !== EnvironmentEnum.PROD,
});

export default store;

export type AppDispatch = typeof store.dispatch;