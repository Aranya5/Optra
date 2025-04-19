import SystemHealth from '../../components/SystemHealth';
import StatsCard from '../../components/StatsCard';


const AdminDashboard = () => {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Console</h1>
        <p className="text-gray-600 mt-2">System overview and administration</p>
      </div>

      <StatsCard className="mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">System Health</h2>
          <SystemHealth />
        </div>
        
      </div>
    </div>
  );
};

export default AdminDashboard;