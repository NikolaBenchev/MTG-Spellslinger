import { configureStore } from "@reduxjs/toolkit";  
import { usersSlice } from "../features/users/users.slice";


export const reducer = {
    users: usersSlice.reducer
};

export interface RootState {
    users: {
        pagination: {
            totalCount: null,
            limit: null,
            page: null
        },
        list: [],
        isLoading: false
    }
}

export const store = configureStore({
	reducer,
    devTools: true
	// devTools: import.meta.env.VITE_APP_ENVIRONMENT !== EnvironmentEnum.PROD,
});

export default store;

export type AppDispatch = typeof store.dispatch;