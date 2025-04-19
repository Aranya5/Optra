import FeedbackForm from '../../../components/FeedbackForm';
import EmployeeSelector from '../../../components/EmployeeSelector';

const ManagerFeedback = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="container py-8">
      <div className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Provide Feedback</h1>
        <EmployeeSelector 
          onSelect={setSelectedEmployee} 
          className="mb-6"
        />
        {selectedEmployee && (
          <FeedbackForm 
            isManager={true} 
            recipient={selectedEmployee} 
          />
        )}
      </div>
    </div>
  );
};

export default ManagerFeedback;