import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './navigation.css';
import planetLogo from '../../images/planet.png';

function Navigation() {
  return (
    <nav>
      <div className="logo">
        <img src={planetLogo} alt="Space Travel Hub logo" />
        <h1>Space Travel Hub</h1>
        <ul className="links">
          <li><NavLink to="/" exact className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Rockets</NavLink></li>
          <li><NavLink to="dragons" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Dragons</NavLink></li>
          <li><NavLink to="missions" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Missions</NavLink></li>
          <li><NavLink to="profile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My Profile</NavLink></li>
        </ul>
      </div>
      <Outlet />
    </nav>
  );
}
export default Navigation;
