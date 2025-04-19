import { Badge } from '@mui/material';
import { CheckCircle, Warning, Error } from '@mui/icons-material';

const ReportList = ({ filters }) => {
  const reports = [
    { 
      id: 1, 
      title: 'Harassment complaint', 
      category: 'Workplace Conduct', 
      date: '2023-06-12', 
      status: 'resolved',
      priority: 'high'
    },
    { 
      id: 2, 
      title: 'Safety violation', 
      category: 'Work Environment', 
      date: '2023-06-10', 
      status: 'in-progress',
      priority: 'medium'
    },
    { 
      id: 3, 
      title: 'Policy suggestion', 
      category: 'General Feedback', 
      date: '2023-06-08', 
      status: 'new',
      priority: 'low'
    },
  ];

  const statusIcons = {
    resolved: <CheckCircle color="success" />,
    'in-progress': <Warning color="warning" />,
    new: <Error color="error" />,
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Report
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Category
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Priority
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {reports.map((report) => (
          <tr key={report.id} className="hover:bg-gray-50 cursor-pointer">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">{report.title}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{report.category}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{new Date(report.date).toLocaleDateString()}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <Badge badgeContent={statusIcons[report.status]} color="default">
                <span className="text-sm capitalize">{report.status}</span>
              </Badge>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-2 py-1 text-xs rounded-full capitalize ${
                report.priority === 'high' ? 'bg-red-100 text-red-800' :
                report.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {report.priority}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportList;