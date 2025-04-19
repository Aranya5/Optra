import ReportList from '../../components/ReportList';
import ReportFilters from '../../components/ReportFilters';

const AdminReports = () => {
  const [filters, setFilters] = useState({
    status: 'all',
    dateRange: 'last30days',
    priority: 'all'
  });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Whistleblower Reports</h1>
        <p className="text-gray-600 mt-2">Review and manage anonymous reports</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <ReportFilters filters={filters} setFilters={setFilters} />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <ReportList filters={filters} />
      </div>
    </div>
  );
};

export default AdminReports;