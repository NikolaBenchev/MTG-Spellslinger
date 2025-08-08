import { createSelector } from "@reduxjs/toolkit";
import type { UsersStateModel } from "../features/users/models/User";

const usersStateKey = (state: any): UsersStateModel => state.users;

export const getUsersState = createSelector(usersStateKey, state => {
    return state;
})