import { useState } from 'react';
import { updateTask } from '../services/taskService';

function TaskList({ tasks, token }) {
  const [status, setStatus] = useState({});

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await updateTask(token, taskId, newStatus);
      setStatus((prev) => ({ ...prev, [taskId]: newStatus }));
    } catch (err) {
      console.error('Failed to update task:', err);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task._id} className="p-4 bg-white rounded shadow">
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p>Assigned to: {task.assignedTo?.email || 'Unassigned'}</p>
            <p>Status: {status[task._id] || task.status}</p>
            <select
              value={status[task._id] || task.status}
              onChange={(e) => handleStatusChange(task._id, e.target.value)}
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;