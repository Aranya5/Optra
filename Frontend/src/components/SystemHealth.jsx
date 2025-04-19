import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SystemHealth = () => {
  const metrics = [
    { 
      name: 'Server Uptime', 
      value: 99.8, 
      threshold: 99.5,
      goodColor: '#10B981',  // green
      badColor: '#F59E0B'    // amber
    },
    { 
      name: 'Database', 
      value: 95.2, 
      threshold: 90,
      goodColor: '#10B981',
      badColor: '#F59E0B'
    },
    { 
      name: 'API Response', 
      value: 98.7, 
      threshold: 95,
      goodColor: '#10B981',
      badColor: '#F59E0B'
    },
    { 
      name: 'Frontend', 
      value: 99.1, 
      threshold: 98,
      goodColor: '#10B981',
      badColor: '#F59E0B'
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((metric, index) => {
        const isHealthy = metric.value >= metric.threshold;
        
        return (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <CircularProgressbar
                value={metric.value}
                text={`${metric.value}%`}
                styles={buildStyles({
                  pathColor: isHealthy ? metric.goodColor : metric.badColor,
                  textColor: '#1F2937',
                  trailColor: '#E5E7EB',
                  textSize: '24px',
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
            <h3 className="text-sm font-medium text-gray-700 text-center">
              {metric.name}
            </h3>
            <p className="text-xs text-gray-500">
              Threshold: {metric.threshold}%
            </p>
            <span className={`text-xs mt-1 ${
              isHealthy ? 'text-green-600' : 'text-amber-600'
            }`}>
              {isHealthy ? 'Healthy' : 'Needs Attention'}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SystemHealth;
