import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/app.css';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/body';

const AppLayout = () => {
    return (
        <div className='container'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<AppLayout />);