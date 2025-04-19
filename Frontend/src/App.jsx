//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';
import EmployeeDashboard from './pages/Employee/Dashboard';
import ManagerDashboard from './pages/Manager/MDashboard';
import HRDashboard from './pages/HR/Dashboard';
import AdminDashboard from './pages/Admin/Dashboard';
import Navbar from './components/Navbar';
import ReportReview from './pages/HR/ReportReview';
import PerformanceSummary from './components/PerformanceSummary';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Unauthorized" element={<Unauthorized />} />
          
          <Route element={<ProtectedRoute allowedRoles={['employee']} />}>
            <Route path="/employee/dashboard" element={
              <>
                <Navbar />
                <EmployeeDashboard />
              </>
            } />
          </Route>
          
          <Route element={<ProtectedRoute allowedRoles={['manager']} />}>
            <Route path="/manager/dashboard" element={
              <>
                <Navbar />
                <ManagerDashboard />
              </>
            } />
          </Route>
          
          <Route element={<ProtectedRoute allowedRoles={['hr']} />}>
            <Route path="/hr/dashboard" element={
              <>
                <Navbar />
                <HRDashboard />
              </>
            } />
          </Route>
          
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={
              <>
                <Navbar />
                <AdminDashboard />
              </>
            } />
          </Route>
          // Add these new routes:
          <Route path="/hr/reports/:reportId" element={
            <>
              <Navbar />
              <ReportReview />
            </>
          } />

          <Route path="/manager/performance/:employeeId" element={
            <>
              <Navbar />
              <PerformanceSummary />
            </>
          } />
          
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
