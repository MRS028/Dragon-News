import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 font-poppins'>
            <header className='py-3 w-11/12 mx-auto'>
                <NavBar></NavBar>
            </header>
        
            <Outlet/>
        </div>
    );
};

export default AuthLayout;