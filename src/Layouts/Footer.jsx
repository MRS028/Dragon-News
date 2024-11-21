import React from 'react';
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo or Project Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Dragon News</h2>
            <p className="text-sm">Building the future, one step at a time.</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row gap-6">
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/career" className="hover:text-white">Career</a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="hover:text-white">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-white" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-white" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-gray-600 pt-4">
          <p>© {new Date().getFullYear()} Dragon News. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
