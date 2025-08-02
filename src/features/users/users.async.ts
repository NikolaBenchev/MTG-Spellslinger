import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (queryParams: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_ROOT}`)
            console.log(response);
            return response;
        } catch (err: any) {
            // TODO: display error

            return rejectWithValue(err.message.data);
        }
    }
)