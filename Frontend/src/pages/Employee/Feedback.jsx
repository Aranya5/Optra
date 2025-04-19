import FeedbackForm from '../../components/FeedbackForm';

const EmployeeFeedback = () => {
  return (
    <div className="container py-8">
      <div className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Submit Feedback</h1>
        <FeedbackForm isEmployee={true} />
      </div>
    </div>
  );
};

export default EmployeeFeedback;