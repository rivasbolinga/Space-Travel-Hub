import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/rockets">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        <li><NavLink to="/dragons">Dragons</NavLink></li>
        <li><NavLink to="/profile">My Profile</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
