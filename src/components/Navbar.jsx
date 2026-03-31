import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Navbar = ({cartCount}) => {
  console.log(cartCount)
    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
   <a className="lg:pl-10 text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
  DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex font-semibold">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      <li><a>Features</a> </li>
      <li><a>Pricing</a></li>
       <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-5">

  <button className='btn rounded-full p-2 relative '><FontAwesomeIcon icon={faCartShopping} /> {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
          {cartCount}
        </span>
      )}</button>

  <button className='btn rounded-2xl'> Login</button>
    <a className="btn text-white font-bold bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">Get Started</a>

  </div>
</div>
<hr className='border-gray-100 '></hr>
        </div>
    );
};

export default Navbar;