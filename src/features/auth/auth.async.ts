import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AuthStateModel } from "../users/models/Auth";
import type { UserModel } from "../users/models/User";

export const loginUser = createAsyncThunk(
    "users/loginUser",
    async (formData: FormData, { rejectWithValue }) => {
        try {
            return (
                await axios.post(
                    `${import.meta.env.VITE_API_ROOT}/login`,
                    formData,
                    {
                        withCredentials: true,
                    }
                )
            ).data;
        } catch (err: any) {
            return rejectWithValue(err.message.data);
        }
    }
);

export const checkAuth = createAsyncThunk(
    "users/checkAuth",
    async (_, { rejectWithValue }) => {
        try {
            const authData: AuthStateModel = (
                await axios.get(`${import.meta.env.VITE_API_ROOT}/checkAuth`, {
                    withCredentials: true,
                })
            ).data;

            return authData;
        } catch (err: any) {
            return rejectWithValue(err.message.data);
        }
    }
);

export const logout = createAsyncThunk(
    "users/logout",
    async (_, { rejectWithValue }) => {
        try {
            return await axios.post(`${import.meta.env.VITE_API_ROOT}/logout`, {
                withCredentials: true,
            });
        } catch (err: any) {
            return rejectWithValue(err.message.data);
        }
    }
);

export const getUserData = createAsyncThunk(
    "users/getUserData",
    async (userUuid: string | null, { rejectWithValue }) => {
        try {
            const userData: UserModel = (
                await axios.get(
                    `${
                        import.meta.env.VITE_API_ROOT
                    }/getUserData?userUuid=${userUuid}`,
                    {
                        withCredentials: true,
                    }
                )
            ).data;
            return userData;
        } catch (err: any) {
            return rejectWithValue(err.message.data);
        }
    }
);
