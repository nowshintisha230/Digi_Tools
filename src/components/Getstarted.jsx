import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBox, faRocket } from '@fortawesome/free-solid-svg-icons';

const Getstarted = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">

      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 text-base sm:text-lg">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

     
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      
        <div className="relative bg-white rounded-2xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow duration-300">
          <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">
            01
          </span>
          <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-6">
            <FontAwesomeIcon icon={faUser} className="text-purple-600 text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Create Account</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

    
        <div className="relative bg-white rounded-2xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow duration-300">
          <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">
            02
          </span>
          <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-6">
            <FontAwesomeIcon icon={faBox} className="text-purple-600 text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Products</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

      
        <div className="relative bg-white rounded-2xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow duration-300">
          <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">
            03
          </span>
          <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-6">
            <FontAwesomeIcon icon={faRocket} className="text-purple-600 text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Start Creating</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Getstarted;