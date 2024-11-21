import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser, userLogin } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({...error ,login:err.code});
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r bg-base-200 flex justify-center items-center font-poppins">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {
            error.login && <p className="text-red-500 text-sm">{error.login}:Wrong email or password</p>
          }

          <p className="text-blue-500 mb-3 text-sm hover:underline">
            <Link to="/auth/forgetpassword">Forget your password?</Link>
          </p>

          <button
            type="submit"
            className="w-full p-3 btn btn-neutral text-white text-lg font-semibold rounded-lg focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/auth/register">
            <span className="text-blue-500 hover:underline">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
