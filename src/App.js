import React from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

import './scss/style.scss'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
