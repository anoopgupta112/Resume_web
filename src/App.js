// src/App.js
import './App.css'
import React from 'react';
import Resume from './components/Resume';
import { useNavigate} from 'react-router-dom'

import { Button } from '@mui/material';

const App = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/admin/dashboard');
  };
  return (
    <div className="App bg-gray-500">
     
      <Resume />
      <div className="fixed top-4 right-4 ">
        <Button variant="contained" color="primary" onClick={handleClick} >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default App;