import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Goalvoro</h1>
      <ul className="flex space-x-6 text-lg">
        <li className="hover:underline cursor-pointer">Dashboard</li>
        <li className="hover:underline cursor-pointer">Badges</li>
        <li className="hover:underline cursor-pointer">Leaderboard</li>
      </ul>
    </nav>
  );
}

export default Navbar;