import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const { user, signInWithGitHub, signInWithGoogle } = useContext(AuthContext); // Accessing `user`
  const navigate = useNavigate();

  const handleGithubSignIn = () => {
    signInWithGitHub()
      .then(result => {
        // console.log(result.user);
        navigate('/');
      })
      .catch(error => console.log('ERROR', error.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        // console.log(result.user);
        navigate('/');
      })
      .catch(error => console.log('ERROR', error.message));
  };

  return (
    <div>
      {/* Check if the user is logged in */}
      {!user?.email ? ( // Show login options only if the user is not logged in
        <div>
          <h1 className="font-semibold mb-3">Login With</h1>
          <div className="space-y-2">
            <button
              onClick={handleGoogleSignIn}
              className="btn w-full flex items-center gap-2"
            >
              <FcGoogle /> Login With Google
            </button>
            <button
              onClick={handleGithubSignIn}
              className="btn w-full flex items-center gap-2"
            >
              <FaGithub /> Login With Github
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default SocialLogin;
