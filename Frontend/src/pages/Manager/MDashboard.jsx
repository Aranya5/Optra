import { useAuth } from '../../context/AuthContext';
import TeamTasks from '../../components/TeamTasks';
import StatsCard from '../../components/StatsCard';

const ManagerDashboard = () => {
  const { user } = useAuth();

  // Mock data
  const teamStats = [
    { title: 'Team Tasks', value: 24, color: 'bg-blue-100 text-blue-800' },
    { title: 'Completed', value: 15, color: 'bg-green-100 text-green-800' },
    { title: 'Behind Schedule', value: 3, color: 'bg-red-100 text-red-800' },
  ];

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Team Overview</h1>
        <p className="text-gray-600 mt-2">Managing 8 team members</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {teamStats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Team Tasks</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
            Create New Task
          </button>
        </div>
        <TeamTasks />
      </div>
    </div>
  );
};

export default ManagerDashboard;