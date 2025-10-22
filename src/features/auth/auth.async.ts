import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      return (
        await axios.post(`${import.meta.env.VITE_API_ROOT}/login`, formData, {
          withCredentials: true
        })
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
      return await axios.get(`${import.meta.env.VITE_API_ROOT}/checkAuth`, {
        withCredentials: true,
      });
    } catch (err: any) {
      return rejectWithValue(err.message.data);
    }
  }
);
