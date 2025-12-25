import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAuthState } from "../selectors";
import { setUser, logout } from "../features/auth/auth.slice";
import { getUserData } from "../features/auth/auth.async";
import type { AppDispatch } from "../store/store";

export function useSyncUserToRedux() {
    const dispatch = useDispatch<AppDispatch>();
    const { isAuthenticated, userUuid } = useSelector(getAuthState);

    console.log(userUuid);

    const {
        data: userData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["getUserData"],
        queryFn: async () => {
            const response = await dispatch(getUserData(userUuid));

            return response.payload;
        },
        enabled: !!isAuthenticated,
        retry: 1,
        staleTime: 5 * 60 * 1000,
    });

    useEffect(() => {
        console.log(userData);
        if (userData) {
            dispatch(setUser(userData));
        } else if (error || userData === null) {
            dispatch(logout());
        }
    }, [userData, error, dispatch]);

    return { isLoading }; // optional: expose loading state
}
