import FeedbackAnalysis from '../../components/FeedbackAnalysis';

const HRFeedback = () => {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Feedback Analysis</h1>
        <p className="text-gray-600 mt-2">Trends and insights from employee feedback</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <FeedbackAnalysis />
      </div>
    </div>
  );
};

export default HRFeedback;