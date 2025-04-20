// 📁 src/components/EmployeeDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem' ,backgroundColor:'#ffffff'}}>
      <h2>Welcome, Employee!</h2>
      <button onClick={() => navigate('/employee/tasks')}>View My Tasks</button><br /><br />
      <button onClick={() => navigate('/employee/feedback')}>Submit Feedback</button><br /><br />
      <button onClick={() => navigate('/employee/reports')}>Submit Whistleblower Report</button>
    </div>
  );
};
export default EmployeeDashboard;
