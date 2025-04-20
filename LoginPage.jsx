// // src/components/LoginPage.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { TextField, Button, Box, Typography } from '@mui/material';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', {
//         username,
//         password,
//       });
//       if (response.data.success) {
//         // Store role in localStorage for role-based navigation
//         localStorage.setItem('role', response.data.role);
//         navigate(`/${response.data.role}`);
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (err) {
//       setError('Error occurred during login');
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 300, margin: 'auto' }}>
//       <Typography variant="h5" align="center">Login</Typography>
//       <TextField
//         label="Username"
//         variant="outlined"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         margin="normal"
//       />
//       <TextField
//         label="Password"
//         type="password"
//         variant="outlined"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         margin="normal"
//       />
//       {error && <Typography color="error">{error}</Typography>}
//       <Button onClick={handleLogin} variant="contained" sx={{ marginTop: 2 }}>
//         Login
//       </Button>
//     </Box>
//   );
// };

// export default LoginPage;

// src/components/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('employee');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
        role: selectedRole,
      });

      if (response.data.success) {
        localStorage.setItem('role', selectedRole);
        navigate('/${selectedRole}/dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Server error. Try again later.');
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    if (role === 'employee') {
      setUsername('employee1');
      setPassword('password1');
    } else if (role === 'manager') {
      setUsername('manager1');
      setPassword('password2');
    } else if (role === 'hr') {
      setUsername('hr1');
      setPassword('password3');
    }
  };


  return (
    <div className={styles.pageBackground}>
      <div className={styles.container}>
        <h2 className={styles.title}>Login to OPTRA</h2>
  
        <div className={styles.roleButtons}>
          <button onClick={() => handleRoleSelect('employee')}>Employee</button>
          <button onClick={() => handleRoleSelect('manager')}>Manager</button>
          <button onClick={() => handleRoleSelect('hr')}>HR</button>
        </div>
  
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
  
        <button className={styles.loginButton} onClick={handleLogin}>
          Login as {selectedRole}
        </button>
  
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );

}
export default LoginPage;