import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <nav>
      <ul className="links">
        <li><NavLink to="/rockets" className="lists">Rockets</NavLink></li>
        <li><NavLink to="/dragons" className="lists">Dragons</NavLink></li>
        <li><NavLink to="/missions" className="lists">Missions</NavLink></li>
        <li><NavLink to="profile" className="lists">My Profile</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
