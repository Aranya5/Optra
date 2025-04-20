// src/components/TaskManagement.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Typography, TextField, Grid } from '@mui/material';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(response => setTasks(response.data))
      .catch(err => console.error(err));
  }, []);
  
  const addTask = () => {
    const newTask = { title, assignedTo, status, rating: 0 };
    axios.post('http://localhost:5000/api/tasks', newTask)
      .then(() => setTasks([...tasks, newTask]))
      .catch(err => console.error(err));
  };
  

  return (
    <Box>
      <Typography variant="h5">Task Management</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Task Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Assigned To"
            variant="outlined"
            fullWidth
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Status"
            variant="outlined"
            fullWidth
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Button onClick={addTask} variant="contained">Add Task</Button>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 4 }}>
        {tasks.map((task, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Typography variant="h6">{task.title}</Typography>
            <Typography>Assigned to: {task.assignedTo}</Typography>
            <Typography>Status: {task.status}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TaskManagement;
