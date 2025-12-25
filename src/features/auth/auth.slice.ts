import { createSlice } from "@reduxjs/toolkit";
import type { AuthStateModel } from "../users/models/Auth";
import { loginUser, checkAuth } from "./auth.async";

export const initialState: AuthStateModel = {
    isLoading: true,
    isAuthenticated: false,
    userUuid: null,
    userData: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.userData = payload;
            state.isLoading = false;
        },
        logout: (state) => {
            state.userData = null;
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.isLoading = false;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
            })
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuth.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isAuthenticated = payload.isAuthenticated;
                state.userUuid = payload.userUuid;
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
            });
    },
});

export const { setUser, logout } = authSlice.actions;
