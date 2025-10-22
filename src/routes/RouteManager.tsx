import React from "react";
import { Routes, Route } from "react-router";
import { PrivateRoute } from "./PrivateRoute";

const Home = React.lazy(() => import("../pages/Home/home.page"));
const Register = React.lazy(() => import("../pages/Register/register.page"));
const Login = React.lazy(() => import("../pages/Login/login.page"));
const Dashboard = React.lazy(() => import("../pages/Dashboard/dashboard.page"));

const UserManagement = React.lazy(
  () => import("../pages/AdminPanel/UserManagement/user-management.page")
);

const RouteManager = () => {
  return (
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
  );
};

export default RouteManager;
