import { Avatar } from '@mui/material';

const EmployeeList = () => {
  const employees = [
    { id: 1, name: 'Alex Johnson', position: 'Software Engineer', department: 'Engineering', email: 'alex.johnson@example.com' },
    { id: 2, name: 'Maria Garcia', position: 'HR Specialist', department: 'Human Resources', email: 'maria.garcia@example.com' },
    { id: 3, name: 'James Smith', position: 'Sales Manager', department: 'Sales', email: 'james.smith@example.com' },
    { id: 4, name: 'Sarah Williams', position: 'Marketing Coordinator', department: 'Marketing', email: 'sarah.williams@example.com' },
    { id: 5, name: 'David Kim', position: 'Product Designer', department: 'Design', email: 'david.kim@example.com' },
  ];

  return (
    <div className="overflow-x-auto p-4 bg-[#111827] min-h-screen text-white">
      <table className="min-w-full divide-y divide-slate-700">
        <thead className="bg-[#1F2937]">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Employee
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Position
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Department
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Email
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#1F2937] divide-y divide-slate-800">
          {employees.map((employee) => (
            <tr key={employee.id} className="hover:bg-slate-800 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <Avatar sx={{ bgcolor: '#6366F1', width: 40, height: 40 }}>
                      {employee.name.charAt(0)}
                    </Avatar>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white">{employee.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                {employee.position}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                {employee.department}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                {employee.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
