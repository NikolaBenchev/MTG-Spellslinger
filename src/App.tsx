import React from "react"
import { Routes, Route } from "react-router"

const Home = React.lazy(() => import('./pages/Home/home.page'));
const Register = React.lazy(() => import('./pages/Register/register.page'));
const Login = React.lazy(() => import('./pages/Login/login.page'));
const UserManagement = React.lazy(() => import('./pages/AdminPanel/UserManagement/user-management.page'));

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-panel/users" element={<UserManagement />} />
    </Routes>
  )
}

export default App;