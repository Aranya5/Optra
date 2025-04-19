import { useState } from 'react';

const VerificationPoll = ({ reportId }) => {
  const [poll, setPoll] = useState({
    question: 'Have you witnessed inappropriate behavior from this person?',
    options: ['Yes', 'No', 'Not sure'],
    votes: {}
  });

  const submitVote = (option) => {
    // In a real app, this would update backend
    setPoll((prevPoll) => ({
      ...prevPoll,
      votes: {
        ...prevPoll.votes,
        [option]: (prevPoll.votes[option] || 0) + 1
      }
    }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold mb-3">Verification Poll</h3>
      <p className="mb-4">{poll.question}</p>
      
      <div className="space-y-2">
        {poll.options.map((option) => (
          <div key={option}>
            <button 
              onClick={() => submitVote(option)}
              className="w-full text-left p-2 border rounded hover:bg-gray-50"
            >
              {option} {poll.votes[option] ? `(${poll.votes[option]})` : ''}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        {Object.keys(poll.votes).length > 0 ? (
          <span>
            {Object.values(poll.votes).reduce((a, b) => a + b, 0)} employees responded
          </span>
        ) : (
          <span>Poll active for 7 days</span>
        )}
      </div>
    </div>
  );
};

export default VerificationPoll;
