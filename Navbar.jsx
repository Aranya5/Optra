import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">OPTRA</Link>
        <div className="space-x-4">
          {user ? (
            <>
              <Link to={`/${user.role}/dashboard`} className="hover:underline">Dashboard</Link>
              {user.role === 'employee' && (
                <>
                  <Link to="/employee/feedback" className="hover:underline">Feedback</Link>
                  <Link to="/employee/whistleblower" className="hover:underline">Report</Link>
                </>
              )}
              {user.role === 'manager' && (
                <Link to="/manager/feedback" className="hover:underline">Feedback</Link>
              )}
              {user.role === 'hr' && (
                <Link to="/hr/feedback" className="hover:underline">Feedback</Link>
              )}
              {user.role === 'admin' && (
                <Link to="/admin/reports" className="hover:underline">Reports</Link>
              )}
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:underline">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;