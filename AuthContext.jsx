import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { login, register } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({ id: decoded.id, role: decoded.role });
      } catch (err) {
        localStorage.removeItem('token');
      }
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const { token, role } = await login(email, password);
      localStorage.setItem('token', token);
      setUser({ id: jwtDecode(token).id, role });
      navigate(`/${role}/dashboard`);
    } catch (err) {
      throw new Error('Login failed: ' + err.message);
    }
  };

  const handleRegister = async (email, password, role) => {
    try {
      await register(email, password, role);
    } catch (err) {
      throw new Error('Registration failed: ' + err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleRegister, logout }}>
      {children}
    </AuthContext.Provider>
  );
};