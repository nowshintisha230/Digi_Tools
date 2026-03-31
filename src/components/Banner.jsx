import React from 'react';
import banner from '../assets/Banner.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Banner = () => {
    return (
        
    <div className='p-5 lg:px-20 lg:flex lg:justify-between'>
    <div className='flex justify-center items-center'>
    <div className='w-11/12 mx-auto  px-5  '>
    <div className='mt-5'>
  <div className="flex items-center gap-1 bg-[rgba(150,150,233,0.35)] rounded-full p-2 w-fit mx-auto ">
    <div className="w-4 h-4 rounded-full bg-[rgba(160,155,210,0.35)] flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-[rgba(140,100,190,0.55)] flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[rgba(100,70,195,0.75)] flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-[#210be1]"></div>
        </div>
      </div>
    </div>
    <span className="text-xs  font-thin text-[#1b11df] whitespace-nowrap">New: AI-Powered Tools Available</span>
      </div>

<h1 className='my-2 text-3xl font-bold lg:text-5xl text-center'>Supercharge Your</h1>
 <h1  className='text-3xl font-bold text-center lg:text-5xl' >Digital Workflow</h1>
 <p className='mt-5 text-center text-gray-600'>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.
Explore Products
</p>
</div>

<div className='flex my-3 gap-3 items-center justify-center'>
<button className='btn bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white '>Explore products</button>
<button className='btn bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent  rounded-xl border-purple-500'><FontAwesomeIcon icon={faPlay} className="text-2xl text-purple-600" /> Watch Demo</button>
</div>
</div>
</div>
<div className='rounded-2xl lg:w-1/2 lg:p-5 '>
    <img className='object-cover  lg:w-full lg:h-auto' src={banner}></img>
</div>


      </div>
               

      
    );
};

export default Banner;