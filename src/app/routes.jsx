import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

// Pages
import LandingPage from "../pages/Auth/LandingPage";
import Login from "../pages/Auth/Login";
import AdminLogin from "../pages/Auth/AdminLogin";
import AdminRegisterPage from "../pages/Auth/AdminRegisterPage";
import SuperAdminLogin from "../pages/Auth/SuperAdminLogin";
import SuperAdminRegister from "../pages/Auth/SuperAdminRegister";
import EmployeeRegisterForm from "../pages/Auth/EmpRegister";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import Profile from "../pages/MyProfile/Profle";
import AdminTable from "../pages/MyProfile/adminTable";
import LeaveCalendar from "../pages/Calender";

function AppRoutes() {
  return (
    <Routes>
      {/* Without layout */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminRegisterPage />} />
      <Route path="/superadmin/login" element={<SuperAdminLogin />} />
      <Route path="/superadmin/register" element={<SuperAdminRegister />} />

      {/* With layout */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/adminDashboard/requestTable" element={<AdminTable />} />
        <Route path="/cal" element={<LeaveCalendar />} />
        <Route path="/employee_register" element={<EmployeeRegisterForm />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
