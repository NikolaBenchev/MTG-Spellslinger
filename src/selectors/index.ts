import { createSelector } from "@reduxjs/toolkit";
import type { UsersStateModel } from "../features/users/models/User";
import type { AuthStateModel } from "../features/users/models/Auth";

const usersStateKey = (state: any): UsersStateModel => state.users;

export const getUsersState = createSelector(usersStateKey, (state) => {
  return state;
});

const authStateKey = (state: any): AuthStateModel => state.auth;

export const getAuthState = createSelector(authStateKey, (state) => {
  return state;
});
