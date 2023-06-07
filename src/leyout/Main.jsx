import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;