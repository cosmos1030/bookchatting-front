import React, { useState } from 'react';
import Login from '../components/Login'
import { Navigate } from 'react-router-dom';


const LoginPage = ({setUser}) => {
  const access_token = localStorage.getItem('access_token')
  const redirect = () => {
    if (!access_token){
      return null
    } else {
      return <Navigate to='/'></Navigate>
    }
  }

  return (
    <div className="App">
      <Login setUser={setUser}/>
      {redirect()}
    </div>
  );
};

export default LoginPage;
