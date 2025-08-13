import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import './index.css';

/**
 * Root component rendering the navigation bar and the main dashboard.
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;