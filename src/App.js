import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import './App.scss';
import ChatPage from './pages/ChatPage'
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LogoutPage from './pages/LogoutPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router className="App">
      <div>
        <Navigation user={user}></Navigation>
      <Routes>
          <Route path='/' exact element= {<ChatPage/>}></Route>
          <Route path='/:id' element={<ChatPage/>}></Route>
          <Route path='/login' element={<LoginPage setUser={setUser}/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route>
          <Route path='/logout' element={<LogoutPage setUser={setUser}/>}></Route>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
