import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
           <div  className="sticky top-0 z-20 bg-transparent backdrop-blur-lg bg-opacity-15 shadow-lg">
            <Navbar></Navbar>
            
            </div> 
            <div className='min-h-[calc(100vh-488px)]'>
             <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;