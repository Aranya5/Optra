import FeedbackForm from '../../components/FeedbackForm';

function EmployeeFeedback() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Employee Feedback</h1>
      <FeedbackForm token={localStorage.getItem('token')} />
    </div>
  );
}

export default EmployeeFeedback;