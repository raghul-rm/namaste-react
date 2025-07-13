import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import {  createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";

import './styles/app.css';

import { UserProvider } from './utils/userContext';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/body';
// import About from './components/about';
import Contact from './components/contact';
import RestroMenu from './components/restroMenu';
import cartStore from './utils/reduxStore';
import CartPage from './components/cartPage';

const About = React.lazy(() => import('./components/about'));

const AppLayout = () => {
    return (
        <Provider store={cartStore}>            
            <UserProvider>
                <div className='container'>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserProvider>
        </Provider>
    )
}

const resRouter = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout />,
    children: [
        {
        index: true, // This makes this route the default for the parent path
        element: <Navigate to="/product" replace />, // Redirects from "/" to "/dashboard"
        },
        {
        path: "/product",
        element: <Main />,
        },
        {
        path: "/about",
        element: <React.Suspense><About /></React.Suspense>,
        },
        {
        path: "/contact",
        element: <Contact />,
        },
        {
        path: "/product/:id",
        element: <RestroMenu />,
        },
        {
        path: "/cart",
        element: <CartPage />,
        },
    ]
    },
]);

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<RouterProvider router={resRouter} />);