import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter ,Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>    
    
  );
}

export default App;
