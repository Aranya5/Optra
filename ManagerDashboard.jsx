// 📁 src/components/ManagerDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManagerDashboard = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome, Manager!</h2>
      <button onClick={() => navigate('/manager/tasks')}>Assign & View Tasks</button><br /><br />
      <button onClick={() => navigate('/manager/feedback')}>Analyze Feedback</button><br /><br />
      <button onClick={() => navigate('/manager/reports')}>View Whistleblower Reports</button>
    </div>
  );
};
export default ManagerDashboard;
