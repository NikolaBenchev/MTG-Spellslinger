import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { getAuthState } from "../selectors";
import { useEffect, useState } from "react";

export const PrivateRoute = ({ requireAdmin = false }) => {
  const { isAuthenticated } = useSelector(getAuthState);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    if (isAuthenticated && requireAdmin) setUserRole("admin"); // TODO: get user role from backend session
  }, [isAuthenticated, requireAdmin]);

  return isAuthenticated && (!requireAdmin || userRole === "admin") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};
