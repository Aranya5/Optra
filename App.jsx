import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import EmployeeDashboard from './pages/Employee/Dashboard';
import EmployeeFeedback from './pages/Employee/Feedback';
import Whistleblower from './pages/Employee/Whistleblower';
import ManagerDashboard from './pages/Manager/Dashboard';
import ManagerFeedback from './pages/Manager/Feedback';
import HRDashboard from './pages/HR/Dashboard';
import HRFeedback from './pages/HR/Feedback';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminReports from './pages/Admin/Reports';
import ProtectedRoute from './components/ProtectedRoute';

// Load base path from environment variables
const BASE_PATH = import.meta.env.VITE_BASE_PATH || '';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path={`${BASE_PATH}/login`} element={<Login />} />
          <Route
            path={`${BASE_PATH}/employee/dashboard`}
            element={<ProtectedRoute roles={['employee']}><EmployeeDashboard /></ProtectedRoute>}
          />
          <Route
            path={`${BASE_PATH}/employee/feedback`}
            element={<ProtectedRoute roles={['employee']}><EmployeeFeedback /></ProtectedRoute>}
          />
          <Route
            path={`${BASE_PATH}/employee/whistleblower`}
            element={<ProtectedRoute roles={['employee']}><Whistleblower /></ProtectedRoute>}
          />
          <Route
            path={`${BASE_PATH}/manager/dashboard`}
            element={<ProtectedRoute roles={['manager']}><ManagerDashboard /></ProtectedRoute>}
          />
          <Route
            path={`${BASE_PATH}/manager/feedback`}
            element={<ProtectedRoute roles={['manager']}><ManagerFeedback /></ProtectedRoute>}
          />
          <Route
            path={`${BASE_PATH}/hr/dashboard`}
            element={<ProtectedRoute roles={['hr']}><HRDashboard /></ProtectedRoute>}
          />
          <Route
            path={`${BASE_PATH}/hr/feedback`}
            element={<ProtectedRoute roles={['hr']}><HRFeedback /></ProtectedRoute>}
          />
          <Route
            path={`${BASE_PATH}/admin/dashboard`}
            element={<ProtectedRoute roles={['admin']}><AdminDashboard /></ProtectedRoute>}
          />
          <Route
            path={`${BASE_PATH}/admin/reports`}
            element={<ProtectedRoute roles={['admin']}><AdminReports /></ProtectedRoute>}
          />
          <Route path={`${BASE_PATH}/`} element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;