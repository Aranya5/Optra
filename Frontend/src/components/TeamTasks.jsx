import { useState } from 'react';
import { CheckIcon, ClockIcon, ExclamationIcon, UserIcon } from '@heroicons/react/outline';

const TeamTasks = () => {
  // Mock team data - replace with API calls
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Frontend Developer',
      tasks: [
        { id: 101, title: 'Implement login page', status: 'completed', dueDate: '2023-06-10', rating: 4 },
        { id: 102, title: 'Fix dashboard layout', status: 'in-progress', dueDate: '2023-06-15', rating: null },
      ]
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'Backend Developer',
      tasks: [
        { id: 201, title: 'API authentication', status: 'in-progress', dueDate: '2023-06-12', rating: null },
        { id: 202, title: 'Database optimization', status: 'pending', dueDate: '2023-06-18', rating: null },
      ]
    },
    {
      id: 3,
      name: 'James Smith',
      role: 'UX Designer',
      tasks: [
        { id: 301, title: 'Create wireframes', status: 'completed', dueDate: '2023-06-05', rating: 5 },
        { id: 302, title: 'User testing', status: 'overdue', dueDate: '2023-06-08', rating: null },
      ]
    }
  ]);

  const [newTask, setNewTask] = useState({
    memberId: '',
    title: '',
    dueDate: ''
  });

  const statusIcons = {
    completed: <CheckIcon className="h-4 w-4 text-green-500" />,
    'in-progress': <ClockIcon className="h-4 w-4 text-yellow-500" />,
    overdue: <ExclamationIcon className="h-4 w-4 text-red-500" />,
    pending: <ClockIcon className="h-4 w-4 text-gray-400" />
  };

  const handleAddTask = () => {
    if (!newTask.memberId || !newTask.title) return;
    
    const updatedTeam = teamMembers.map(member => {
      if (member.id === parseInt(newTask.memberId)) {
        return {
          ...member,
          tasks: [
            ...member.tasks,
            {
              id: Math.floor(Math.random() * 1000),
              title: newTask.title,
              status: 'pending',
              dueDate: newTask.dueDate || new Date().toISOString().split('T')[0],
              rating: null
            }
          ]
        };
      }
      return member;
    });

    setTeamMembers(updatedTeam);
    setNewTask({ memberId: '', title: '', dueDate: '' });
  };

  return (
    <div className="space-y-6">
      {/* Task Creation Form */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-sm font-medium text-blue-800 mb-3">Assign New Task</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <select
            value={newTask.memberId}
            onChange={(e) => setNewTask({...newTask, memberId: e.target.value})}
            className="md:col-span-1 p-2 border rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="">Select Team Member</option>
            {teamMembers.map(member => (
              <option key={member.id} value={member.id}>{member.name}</option>
            ))}
          </select>
          
          <input
            type="text"
            placeholder="Task description"
            value={newTask.title}
            onChange={(e) => setNewTask({...newTask, title: e.target.value})}
            className="md:col-span-1 p-2 border rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
          
          <input
            type="date"
            value={newTask.dueDate}
            onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
            className="p-2 border rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
          
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 text-sm"
          >
            Assign Task
          </button>
        </div>
      </div>

      {/* Team Tasks List */}
      <div className="space-y-4">
        {teamMembers.map(member => (
          <div key={member.id} className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <UserIcon className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            </div>
            
            <div className="divide-y">
              {member.tasks.map(task => (
                <div key={task.id} className="px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div>
                      {statusIcons[task.status] || statusIcons.pending}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{task.title}</p>
                      <p className="text-xs text-gray-500">
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {task.rating && (
                      <div className="flex items-center text-xs text-yellow-600">
                        <span className="mr-1">Rating:</span>
                        {task.rating}/5
                      </div>
                    )}
                    <select
                      value={task.status}
                      onChange={(e) => {
                        const updatedTasks = member.tasks.map(t => 
                          t.id === task.id ? {...t, status: e.target.value} : t
                        );
                        setTeamMembers(teamMembers.map(m => 
                          m.id === member.id ? {...m, tasks: updatedTasks} : m
                        ));
                      }}
                      className="text-xs border rounded p-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="overdue">Overdue</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamTasks;