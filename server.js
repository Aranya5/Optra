const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Dummy user database
const users = [
  { username: 'admin1', password: 'adminpass', role: 'admin' },
  { username: 'employee1', password: 'employeepass', role: 'employee' },
  { username: 'manager1', password: 'managerpass', role: 'manager' },
  { username: 'hr1', password: 'hrpass', role: 'hr' }
];

// Login API
app.post('/login', (req, res) => {
  const { username, password, role } = req.body;
  const user = users.find(u => u.username === username && u.password === password && u.role === role);

  if (user) {
    res.json({ success: true, role: user.role });
  } else {
    res.status(401).json({ success: false, message: 'Invalid Credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});