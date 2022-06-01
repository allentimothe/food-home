import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Task from './routes/Task/Task';
import Home from './routes/Home/Home';
import Punch from './routes/Punch/Punch';
import Dashboard from './routes/Dashboard/Dashboard';


function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/task' element={<Task />} />
          <Route path='/punch' element={<Punch />} />
      </Routes>
    </>
  );
}

export default App;
