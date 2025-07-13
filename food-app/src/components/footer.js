import React from 'react'

const Footer = () => {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);
  
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
    <footer className='footer'>
        <p>&copy; TasteyBites, All Rights reserved</p>        
        <p>{!!isOnline ? <span>🟢 <b>Online</b></span> : <span>🔴 <b>Offline</b></span>}</p>
    </footer>
  )
}

export default Footer;