// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
    window.location.reload(); // Ensures role is cleared
  };

  // Hide navbar on login page or if role is undefined
  if (!role) return null;

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#333' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component={Link} to={`/${role}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
          OPTRA Dashboard
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to={`/${role}/tasks`} sx={{ textTransform: 'none' }}>
            Tasks
          </Button>
          <Button color="inherit" component={Link} to={`/${role}/feedback`} sx={{ textTransform: 'none' }}>
            Feedback
          </Button>
          <Button color="inherit" component={Link} to={`/${role}/reports`} sx={{ textTransform: 'none' }}>
            Reports
          </Button>
          <Button
            onClick={handleLogout}
            sx={{
              ml: 2,
              backgroundColor: '#ff4d4f',
              color: 'white',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#e60000' }
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
