import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const createTask = async (token, taskData) => {
  const response = await axios.post(API_URL, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getTasks = async (token) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateTask = async (token, id, status) => {
  const response = await axios.put(`${API_URL}/${id}`, { status }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};