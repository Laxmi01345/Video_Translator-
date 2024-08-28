import React from 'react';
import logo from "../images/logo.png";
const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
          <img src={logo} alt="Logo" className="w-36 h-14" />
          
          </div>
          <div className='text-center'>
            <h2 className='text-xl font-semibold'>Quick Links</h2>
            <ul className='mt-2'>
              <li><a href='#' className='text-gray-300 hover:text-white'>Home</a></li>
              <li><a href='#' className='text-gray-300 hover:text-white'>About</a></li>
              <li><a href='#' className='text-gray-300 hover:text-white'>Services</a></li>
              <li><a href='#' className='text-gray-300 hover:text-white'>Contact</a></li>
            </ul>
          </div>
          <div className='text-center'>
            <h2 className='text-xl font-semibold'>Follow Us</h2>
            <div className='flex justify-center mt-2 space-x-4'>
              <a href='#' className='text-gray-300 hover:text-white'>
                <i className='fab fa-facebook-f'></i> Facebook
              </a>
              <a href='#' className='text-gray-300 hover:text-white'>
                <i className='fab fa-twitter'></i> Twitter
              </a>
              <a href='#' className='text-gray-300 hover:text-white'>
                <i className='fab fa-linkedin-in'></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className='text-center mt-6'>
          <p className='text-gray-400 text-sm'>
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
