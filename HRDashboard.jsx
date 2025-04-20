// 📁 src/components/HRDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HRDashboard = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome, HR!</h2>
      <button onClick={() => navigate('/hr/employees')}>View Employee List</button><br /><br />
      <button onClick={() => navigate('/hr/feedback')}>Feedback Sentiment Analysis</button><br /><br />
      <button onClick={() => navigate('/hr/reports')}>Review Whistleblower Reports</button>
    </div>
  );
};
export default HRDashboard;
