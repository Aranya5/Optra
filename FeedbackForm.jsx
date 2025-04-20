// 📁 src/components/FeedbackForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/sentiment', { text });
      setSentiment(res.data.sentiment);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} cols={60} /><br /><br />
        <button type="submit">Analyze Sentiment</button>
      </form>
      {sentiment && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Sentiment:</strong> {sentiment}
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;