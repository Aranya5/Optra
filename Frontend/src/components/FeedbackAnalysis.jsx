import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const FeedbackAnalysis = () => {
  // Mock data - replace with API calls
  const feedbackData = {
    monthlyTrends: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Positive',
          data: [12, 19, 15, 8, 14, 18],
          backgroundColor: 'rgba(16, 185, 129, 0.7)',
        },
        {
          label: 'Neutral',
          data: [8, 5, 7, 12, 9, 6],
          backgroundColor: 'rgba(251, 191, 36, 0.7)',
        },
        {
          label: 'Negative',
          data: [3, 2, 4, 5, 2, 1],
          backgroundColor: 'rgba(239, 68, 68, 0.7)',
        },
      ],
    },
    sentimentDistribution: {
      labels: ['Positive', 'Neutral', 'Negative'],
      datasets: [
        {
          data: [65, 25, 10],
          backgroundColor: [
            'rgba(16, 185, 129, 0.7)',
            'rgba(251, 191, 36, 0.7)',
            'rgba(239, 68, 68, 0.7)',
          ],
          borderWidth: 1,
        },
      ],
    },
    byDepartment: {
      labels: ['Engineering', 'Marketing', 'HR', 'Sales', 'Operations'],
      datasets: [
        {
          label: 'Average Rating',
          data: [4.2, 3.8, 4.5, 4.1, 3.9],
          backgroundColor: 'rgba(59, 130, 246, 0.7)',
        },
      ],
    },
  };

  const trendOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Feedback Trends',
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const sentimentOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sentiment Distribution',
      },
    },
  };

  const departmentOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Average Rating by Department',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 5,
      },
    },
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <Bar options={trendOptions} data={feedbackData.monthlyTrends} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <Pie options={sentimentOptions} data={feedbackData.sentimentDistribution} />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <Bar options={departmentOptions} data={feedbackData.byDepartment} />
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Recent Feedback Comments</h3>
        <div className="space-y-3">
          {[
            "Great teamwork on the project deadline!",
            "Need more clarity on quarterly goals",
            "Excellent leadership during the crisis",
            "Communication could be improved between departments",
            "Very supportive manager"
          ].map((comment, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50">
              <p className="text-gray-800">{comment}</p>
              <p className="text-sm text-gray-500 mt-1">- Anonymous, {['Engineering', 'Marketing', 'HR'][index % 3]} Dept</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackAnalysis;