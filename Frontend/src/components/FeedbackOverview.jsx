import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FeedbackOverview = () => {
  const data = {
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
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
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

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900">Feedback Trends</h2>
        <p className="text-sm text-gray-500">Last 6 months</p>
      </div>
      <div className="h-64">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default FeedbackOverview;