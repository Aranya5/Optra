// We'll begin with LoginPage.js 
// // src/pages/LoginPage.js 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [role, setRole] = useState("employee");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/${role}/dashboard`);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-gray-800">
      <div className="bg-slate-800 p-10 rounded-2xl shadow-2xl w-96 border border-slate-700">
        <h2 className="text-3xl font-semibold text-center text-indigo-400 mb-6">
          Login to OPTRA
        </h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-slate-300">
            Select Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-slate-600 bg-slate-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
            <option value="hr">HR</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
