import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Logout from '../components/Logout'


const LogoutPage = ({setLoggedInUser, setUser}) => {
  return (
    <div>
        <h1>로그아웃 페이지</h1>
        <Logout setLoggedInUser={setLoggedInUser} setUser={setUser}></Logout>
        <Navigate to='/login'></Navigate>
    </div>
  );
};

export default LogoutPage;
