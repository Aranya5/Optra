import { useAuth } from '../../context/AuthContext';
import TaskList from '../../components/TaskList';
import StatsCard from '../../components/StatsCard';
import PerformanceSummary from '../../components/PerformanceSummary';

const EmployeeDashboard = () => {
  const { user } = useAuth();

  // Mock data - replace with API calls
  const tasks = [
    { 
      id: 1, 
      title: 'Complete project report', 
      description: 'Finalize the Q2 financial report', 
      status: 'in-progress', 
      dueDate: '2023-06-15',
      rating: null // Added rating field
    },
    { 
      id: 2, 
      title: 'Team meeting', 
      description: 'Weekly sync with marketing team', 
      status: 'pending', 
      dueDate: '2023-06-10',
      rating: null
    },
    { 
      id: 3, 
      title: 'Training module', 
      description: 'Complete new security training', 
      status: 'completed', 
      dueDate: '2023-06-05',
      rating: 4 // Example completed task with rating
    },
  ];

  const stats = [
    { title: 'Pending Tasks', value: 5, color: 'bg-orange-100 text-orange-800' },
    { title: 'Completed Tasks', value: 12, color: 'bg-green-100 text-green-800' },
    { title: 'Overdue', value: 1, color: 'bg-red-100 text-red-800' },
    { title: 'Avg Rating', value: '4.2/5', color: 'bg-blue-100 text-blue-800' }, // New stat
  ];

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome back, {user?.name}</h1>
        <p className="text-gray-600 mt-2">Here's what's happening today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Your Tasks</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
              View All Tasks
            </button>
          </div>
          <TaskList tasks={tasks} showStatus={true} showRating={true} />
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <PerformanceSummary userId={user?.id} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;