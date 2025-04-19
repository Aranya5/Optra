import { useState } from 'react';
import FeedbackOverview from '../../components/FeedbackOverview';
import EmployeeList from '../../components/EmployeeList';
import StatsCard from '../../components/StatsCard';

const HRDashboard = () => {
  const [activeTab, setActiveTab] = useState('feedback');

  const hrStats = [
    { title: 'Employees', value: 87, color: 'bg-indigo-100 text-indigo-800' },
    { title: 'New Hires', value: 5, color: 'bg-green-100 text-green-800' },
    { title: 'Open Positions', value: 3, color: 'bg-yellow-100 text-yellow-800' },
  ];

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">HR Dashboard</h1>
        <p className="text-gray-600 mt-2">People analytics and management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {hrStats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('feedback')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'feedback'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Employee Feedback
            </button>
            <button
              onClick={() => setActiveTab('employees')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'employees'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Employee Directory
            </button>
          </nav>
        </div>
        <div className="p-6">
          {activeTab === 'feedback' ? <FeedbackOverview /> : <EmployeeList />}
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
