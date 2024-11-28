import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'
import { AuthContext } from "../Provider/AuthProvider";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";

const NavBar = () => {
  const {user,logOut} =useContext(AuthContext);
   
 
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex gap-1">
        {
            user && user?.email ? <div>
              <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
            </div> : (<img className=" rounded-full" src={userIcon} alt="" />)
          }
        <p className="py-2 text-xl font-semibold">{user && user.displayName}</p>
        </div>
      <div className="nav text-xl space-x-5">
        <Link className="hover:underline " to='/'> Home </Link>
        <Link className="hover:underline " to='/auth/career'>Career</Link>
        <Link className="hover:underline " to='/auth/about'>About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div>
          
          
        </div>
        {
          user && user?.email ? (<button onClick={logOut} className="btn bg-red-600 hover:bg-red-700 text-white  rounded"><IoIosLogOut /> Logout</button>)  : (<Link to='/auth/login'><button className="btn bg-green-600 hover:bg-green-700 text-white rounded"><IoIosLogIn /> Login </button></Link> )
        }
        
      </div>
    </div>
  );
};

export default NavBar;
