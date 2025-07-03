import React from 'react';
import ReactDOM from 'react-dom/client';

import {  createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import './styles/app.css';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/body';
import About from './components/about';
import Contact from './components/contact';
import RestroMenu from './components/restroMenu';

const AppLayout = () => {
    return (
        <div className='container'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const resRouter = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout />,
    children: [
        {
        path: "/product",
        element: <Main />,
        },
        {
        path: "/about",
        element: <About />,
        },
        {
        path: "/contact",
        element: <Contact />,
        },
        {
        path: "/product/:id",
        element: <RestroMenu />,
        },
    ]
    },
]);

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<RouterProvider router={resRouter} />);