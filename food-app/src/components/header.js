import React from 'react';

import Logo from '../assets/images/logo.png';

console.log(Logo)

const Header = () => {
  return (
    <header className='header'>
        <div className='branding'>
            <img src={Logo} alt='Logo' />
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;