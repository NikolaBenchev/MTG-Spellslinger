import { createSlice } from "@reduxjs/toolkit";
import type { UsersStateModel } from "./models/User";
import { getUsers } from "./users.async";

export const initialState: UsersStateModel = {
  pagination: {
    totalCount: null,
    limit: null,
    page: null,
  },
  list: [],
  isLoading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload.list;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
      })
  },
});
