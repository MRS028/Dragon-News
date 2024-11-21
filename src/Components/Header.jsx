import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-3 text-center'>
           <div className='logo'>
            <img className='w-[300px]' src={logo} alt="" />
            <h2 className='text-[#706F6F] py-2 '>Journalism without Fear and Favour</h2>
            <p className=' text-[#2e2e2e]'>{moment().format("dddd, MMMM Do YYYY")}</p>
           </div>
        </div>
    );
};

export default Header;