import { createSlice } from "@reduxjs/toolkit";
import type { UsersStateModel } from "./models/User";

const initialState: UsersStateModel = {
    pagination: {
        totalCount: null,
        limit: null,
        page: null
    },
    list: [],
    isLoading: false
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        get: state => {
            
        },
        getAll: state => {

        },
        create: state => {
            
        },
        update: state => {

        }
    } 
});