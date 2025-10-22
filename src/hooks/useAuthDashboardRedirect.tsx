import { useSelector } from "react-redux";
import { getAuthState } from "../selectors";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const useAuthDashboardRedirect = () => {
  const { isAuthenticated } = useSelector(getAuthState);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated]);
};

export default useAuthDashboardRedirect;
