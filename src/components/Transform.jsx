import React from 'react';

const Transform = () => {
    return (
        <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 py-24 px-4 text-center">

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
                Ready To Transform Your Workflow?
            </h1>
 
            <p className="text-white text-opacity-80 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
                Join thousands of professionals who are already using Digitools to work smarter.<br />
                Start your free trial today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <button className="px-8 py-3 rounded-full bg-white text-purple-600 font-semibold text-sm cursor-pointer border-none w-48">
                    Explore Products
                </button>
                <button className="px-8 py-3 rounded-full bg-transparent text-white font-semibold text-sm cursor-pointer border-2 border-white w-48">
                    View Pricing
                </button>
            </div>

            <p className="text-white text-opacity-70 text-xs md:text-sm">
                14-day free trial •  No credit card required •  Cancel anytime
            </p>

        </div>
    );
};

export default Transform;