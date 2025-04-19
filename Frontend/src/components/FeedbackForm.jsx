import { useState } from 'react';
import Rating from './Rating';

const FeedbackForm = ({ isManager = false, isEmployee = false, recipient }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Feedback submitted successfully!');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit}>
      {isManager && recipient && (
        <div className="mb-4 p-3 bg-blue-50 rounded-md">
          <p className="text-sm text-gray-600">Providing feedback for:</p>
          <p className="font-medium">{recipient.name}</p>
        </div>
      )}

      {isEmployee && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Feedback Type
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>General Feedback</option>
            <option>Suggestion</option>
            <option>Concern</option>
          </select>
        </div>
      )}

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {isManager ? 'Performance Rating' : 'Satisfaction Rating'}
        </label>
        <Rating value={rating} onChange={setRating} />
      </div>

      <div className="mb-6">
        <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
          Detailed Feedback
        </label>
        <textarea
          id="feedback"
          rows={5}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-4 rounded-md text-white font-medium ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} transition-colors`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
      </button>
    </form>
  );
};

export default FeedbackForm;
