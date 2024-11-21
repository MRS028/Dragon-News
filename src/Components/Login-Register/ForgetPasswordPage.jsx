import React, { useEffect } from 'react';

const ForgetPasswordPage = () => {
  useEffect(() => {
    document.title = "Forget Password | Dragon News";
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r bg-base-200 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Forget Password</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your registered email address to reset your password.
        </p>
        <form>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Remember your password?{' '}
          <a href="/auth/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
