import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from './LoginPage.js'
import SignupPage from './SignupPage.js';
import Home from './Home.jsx';

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App