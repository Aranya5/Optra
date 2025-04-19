import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';

const PerformanceSummary = ({ userId }) => {
  const [performance, setPerformance] = useState(null);

  // Mock data fetch
  useEffect(() => {
    const mockData = {
      averageRating: 4.2,
      completedTasks: 12,
      overdueTasks: 1,
      recentFeedback: [
        { id: 1, manager: 'Sarah Johnson', rating: 4, comment: 'Good work on the Q2 report', date: '2023-06-10' },
        { id: 2, manager: 'Michael Chen', rating: 5, comment: 'Excellent client presentation', date: '2023-05-28' }
      ]
    };
    setPerformance(mockData);
  }, [userId]);

  if (!performance) return <div>Loading performance data...</div>;

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance Summary</h2>

      <div className="flex items-center mb-6">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-5 w-5 ${i < Math.floor(performance.averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <span className="ml-2 text-gray-700 font-medium">
          {performance.averageRating.toFixed(1)}/5.0
        </span>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-gray-700">Recent Feedback</h3>
        {performance.recentFeedback.map((feedback) => (
          <div key={feedback.id} className="border-l-4 border-blue-500 pl-4 py-2">
            <div className="flex justify-between">
              <span className="font-medium">{feedback.manager}</span>
              <span className="text-sm text-gray-500">
                {new Date(feedback.date).toLocaleDateString()}
              </span>
            </div>
            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-4 w-4 ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-1">{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceSummary;
