import React from 'react';
import { NavLink } from 'react-router-dom';

import resLogo from 'url:../assets/images/logo.png';

const Header = () => {
  return (
    <header className='header'>
        <div className='branding'>
            <img src={resLogo} alt='Logo' />
        </div>
        <nav>
            <ul>
                <li><NavLink to="/"className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li>Cart</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;