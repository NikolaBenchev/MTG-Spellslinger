import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (_, { rejectWithValue }) => {
        try {
            return (await axios.get(`${import.meta.env.VITE_API_ROOT}/users`)).data;
        } catch (err: any) {
            return rejectWithValue(err.message.data);
        }
    }
)

export const createUser = createAsyncThunk(
    'users/createUser',
    async (formData: FormData, { rejectWithValue }) => {
        try {
            return (await axios.post(`${import.meta.env.VITE_API_ROOT}/users`, formData)).data;
        } catch (err: any) {
            return rejectWithValue(err.message.data);
        }
    }
)

export const loginUser = createAsyncThunk(
    'users/loginUser',
    async(formData: FormData, { rejectWithValue }) => {
        try {
            return (await axios.post(`${import.meta.env.VITE_API_ROOT}/login`, formData)).data;
        } catch (err: any) {
            return rejectWithValue(err.message.data);
        }
    }
)




// TODO: test and remove user from state
export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async (userUuid: string, { rejectWithValue }) => {
        try {
            return (await axios.delete(`${import.meta.env.VITE_API_ROOT}/users/${userUuid}`)).data;
        } catch (err: any) {
            return rejectWithValue(err.message.data);
        }
    }
)