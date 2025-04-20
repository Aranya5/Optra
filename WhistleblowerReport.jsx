// src/components/WhistleblowerReport.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography } from '@mui/material';

const WhistleblowerReport = () => {
  const [reportText, setReportText] = useState('');

  const handleReportSubmit = () => {
    const report = { report: reportText, submittedBy: 'anonymous' };
    axios.post('http://localhost:5000/api/reports', report)
      .then(() => alert('Report submitted successfully!'))
      .catch(err => console.error(err));
  };
  
  return (
    <Box>
      <Typography variant="h5">Submit a Whistleblower Report</Typography>
      <TextField
        label="Report"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={reportText}
        onChange={(e) => setReportText(e.target.value)}
      />
      <Button onClick={handleReportSubmit} variant="contained" sx={{ marginTop: 2 }}>
        Submit Report
      </Button>
    </Box>
  );
};

export default WhistleblowerReport;
