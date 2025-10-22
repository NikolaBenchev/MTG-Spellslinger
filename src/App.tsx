import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router";
import { PrivateRoute } from "./routes/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState } from "./selectors";
import { checkAuth } from "./features/auth/auth.async";
import type { AppDispatch } from "./store/store";

const Home = React.lazy(() => import("./pages/Home/home.page"));
const Register = React.lazy(() => import("./pages/Register/register.page"));
const Login = React.lazy(() => import("./pages/Login/login.page"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/dashboard.page"));

const UserManagement = React.lazy(
  () => import("./pages/AdminPanel/UserManagement/user-management.page")
);

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector(getAuthState);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<PrivateRoute requireAdmin />}>
          <Route path="/admin-panel/users" element={<UserManagement />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
