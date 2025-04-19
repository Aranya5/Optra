import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  const navLinks = {
    admin: [
      { path: '/admin/dashboard', label: 'Dashboard' },
      { path: '/admin/reports', label: 'Reports' },
    ],
    hr: [
      { path: '/hr/dashboard', label: 'Dashboard' },
      { path: '/hr/feedback', label: 'Employee Feedback' },
    ],
    manager: [
      { path: '/manager/dashboard', label: 'Dashboard' },
      { path: '/manager/feedback', label: 'Give Feedback' },
    ],
    employee: [
      { path: '/employee/dashboard', label: 'Dashboard' },
      { path: '/employee/feedback', label: 'Feedback' },
      { path: '/employee/whistleblower', label: 'Report Issue' },
    ],
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-xl font-bold text-blue-600">
            CompanyPortal
          </Link>
          {user && (
            <div className="hidden md:flex space-x-6">
              {navLinks[user.role]?.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        {user && (
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 hidden sm:inline">
              Welcome, {user.name}
            </span>
            <button
              onClick={logout}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;