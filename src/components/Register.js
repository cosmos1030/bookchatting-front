// src/components/Auth.js

import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/register/', credentials);
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error('Registration failed', error.response.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleInputChange}
        value={credentials.username}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
        value={credentials.password}
      />
      <button onClick={handleRegister}>Register</button>

    </div>
  );
};

export default Auth;
