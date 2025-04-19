import { CheckIcon, ClockIcon, ExclamationIcon, StarIcon } from '@heroicons/react/outline';

const statusIcons = {
  completed: <CheckIcon className="h-5 w-5 text-green-500" />,
  'in-progress': <ClockIcon className="h-5 w-5 text-yellow-500" />,
  overdue: <ExclamationIcon className="h-5 w-5 text-red-500" />,
  pending: <ClockIcon className="h-5 w-5 text-gray-400" />,
};

const TaskList = ({ tasks, showStatus = false, showRating = false }) => {
  return (
    <div className="overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {tasks.map((task) => (
          <li key={task.id} className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {showStatus && (
                  <div className="mr-3">
                    {statusIcons[task.status] || statusIcons.pending}
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900">{task.title}</p>
                  <p className="text-sm text-gray-500">{task.description}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-3">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </span>
                {showRating && task.rating && (
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm ml-1">{task.rating}</span>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;