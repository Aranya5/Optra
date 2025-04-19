import { useParams } from 'react-router-dom';

const ReportReview = () => {
  const { reportId } = useParams();
  
  // Mock data - in real app, fetch from API
  const report = {
    id: reportId,
    reporter: { id: 'EMP-228', name: 'Anonymous (Click to reveal)', visible: false },
    accused: 'Manager (John Doe)',
    details: 'Claimed harassment during team meetings...',
    status: 'unverified'
  };

  const revealReporter = () => {
    // In real app, this would require HR/admin permissions
    alert(`Reporter: ${report.reporter.name} (${report.reporter.id})`);
  };

  return (
    <div className="container py-8">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold">Report #{report.id}</h1>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium">Reporter</h3>
              <button 
                onClick={revealReporter}
                className="text-blue-600 hover:underline"
              >
                {report.reporter.name}
              </button>
            </div>
            <div>
              <h3 className="font-medium">Accused</h3>
              <p>{report.accused}</p>
            </div>
          </div>
        </div>

        <div className="p-6 border-b">
          <h3 className="font-medium mb-2">Details</h3>
          <p className="whitespace-pre-line">{report.details}</p>
        </div>

        <div className="p-6">
          <h3 className="font-medium mb-3">Verification Poll</h3>
          <p className="text-sm text-gray-600 mb-4">
            Ask other employees if they've witnessed similar behavior:
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Create Verification Poll
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportReview;
