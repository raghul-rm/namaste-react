import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import resLogo from 'url:../assets/images/logo.png';

import { userUseContext } from '../utils/userContext';

const Header = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  const navigate = useNavigate();

  const {name, setName} = userUseContext();

  const items = useSelector(store => store.cart.items)

  const handleLogin = (loginVal) => {
    setIsLogin(prev => !prev);
    setName(!!loginVal ? 'Raghul' : 'Default');
  }

  return (
    <header className='header'>
        <div className='branding'>
            <img src={resLogo} alt='Logo' />
        </div>
        <nav>
            <ul>
                <li><NavLink to="/product"className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li onClick={() => navigate('/cart')}>Cart ({items.length})</li>
                <li><button type='button' onClick={() => handleLogin(isLogin)}>{!!isLogin ? 'Login' : 'Logout'}</button></li>
                <li>{name}</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;