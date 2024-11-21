import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const RegisterPage = () => {
  useEffect(() => {
    document.title = "Register | Dragon News";
  }, []);

    const navigate = useNavigate();

    const {createNewUser,setUser, updateUserProfile}= useContext(AuthContext);
    const [error,setError] = useState({});


    const handleSubmit = e =>{
        e.preventDefault();

        // fet form data
        const form = new FormData(e.target);
        const name = form.get("name");
        if(name.length <5){
          setError({...error, name:"You have to use at least 5 character."});
          return;
        }
        const email = form.get("email");
        const photourl = form.get("photourl");
        const password = form.get("password");
        

        createNewUser(email,password)
        .then(result =>{
            const user = result.user;
            setUser(user);
            updateUserProfile({displayName:name ,photoURL:photourl})
            .then(()=>{
              navigate('/')
            }).catch(err=>{console.log(err, 'Error')});
            navigate('/');
            

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
          });
    }

  return (
    <div className="min-h-screen bg-gradient-to-r bg-base-200 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          {
            error.name && (<p className="text-red-500 text-sm">{error.name}</p>)
          }
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">Photo URL</label>
            <input
              
             
              name="photourl"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="photo-url"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="email">Email</label>
            <input
              type="email"
              
              name="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="password">Password</label>
            <input
              type="password"
              
              name="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 focus:outline-none"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a className="text-green-500 hover:underline"><Link to='/auth/login'>Login here</Link></a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
