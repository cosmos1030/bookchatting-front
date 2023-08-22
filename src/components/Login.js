// src/components/Auth.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = ({setUser}) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login/', credentials);
      console.log('Login successful', response.data);
      localStorage.setItem('access_token', response.data.access_token)
    } catch (error) {
      console.error('Login failed', error.response.data);
    }
  };

  useEffect(() => {
    // access token을 사용하여 사용자 정보 가져오기

    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/user-profile/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        setUser(response.data);
        localStorage.setItem('user_info', response.data)
        console.log(response.data)
      } catch (error) {
        // 사용자 정보 가져오기 실패 처리
        console.log("사용자 정보 가져오기 실패")
      }
    };

    // 사용자 정보 가져오기
    if (localStorage.getItem('access_token')) {
      fetchUser();
    }
  }, []);

  return (
    <div>

      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
