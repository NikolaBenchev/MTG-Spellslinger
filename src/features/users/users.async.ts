import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (queryParams: string = "", { rejectWithValue }) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_ROOT}/users`)
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.message.data);
        }
    }
)