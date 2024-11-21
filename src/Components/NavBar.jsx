import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const {user,logOut} =useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div>{user && user.displayName}</div>
      <div className="nav space-x-5">
        <Link to='/'>Home</Link>
        <Link to='/career'>Career</Link>
        <Link to='/about'>About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div>
          {
            user && user?.email ? <div>
              <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
            </div> : (<img className=" rounded-full" src={userIcon} alt="" />)
          }
          
        </div>
        {
          user && user ?.email ? (<button onClick={logOut} className="btn btn-neutral rounded">Logout</button>)  : (<Link to='/auth/login'><button className="btn btn-neutral rounded"> Login </button></Link> )
        }
        
      </div>
    </div>
  );
};

export default NavBar;
