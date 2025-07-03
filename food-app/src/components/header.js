import * as React from 'react';
import { NavLink } from 'react-router-dom';

import resLogo from 'url:../assets/images/logo.png';

const Header = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  const handleLogin = () => {
    setIsLogin(prev => !prev);
  }

   React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

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
                <li>Cart</li>
                <li><span>{!!isOnline ? 'Online' : 'Offline'}</span></li>
                <li><button type='button' onClick={handleLogin}>{!!isLogin ? 'Login' : 'Logout'}</button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;