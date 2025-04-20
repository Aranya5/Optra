// src/components/EmployeeList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/feedback')
      .then(response => setEmployees(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Box>
      <Typography variant="h5">Employee List</Typography>
      {employees.map((employee, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          <Typography>{employee.from}</Typography>
          <Button>View Feedback</Button>
        </Box>
      ))}
    </Box>
  );
};

export default EmployeeList;
