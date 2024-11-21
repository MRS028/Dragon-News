import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-semibold mb-3 '>Login With</h1>
            <div className='space-y-2 '>
                <button className="btn w-full"><FcGoogle />Login With Google</button>
                <button className="btn w-full"><FaGithub />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;