import { useState } from 'react';
import { submitFeedback } from '../services/feedbackService';

function FeedbackForm({ token }) {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitFeedback(token, content);
      setContent('');
      setError('');
      alert('Feedback submitted successfully');
    } catch (err) {
      setError('Failed to submit feedback');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Submit Feedback</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          placeholder="Enter your feedback"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;