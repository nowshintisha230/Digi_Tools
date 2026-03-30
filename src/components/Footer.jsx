import React from 'react';

const Footer = () => {
    return (
        <div className="w-full bg-gray-950 text-white px-6 md:px-16 pt-16 pb-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

                <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold text-white mb-4">DigiTools</h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold text-base mb-4">Product</h3>
                    <ul className="space-y-3">
                        <li><a href="" className="text-gray-400 text-sm hover:text-white">Features</a></li>
                        <li><a href="" className="text-gray-400 text-sm hover:text-white">Pricing</a></li>
                        <li><a href="" className="text-gray-400 text-sm hover:text-white">Templates</a></li>
                        <li><a href="" className="text-gray-400 text-sm hover:text-white">Integrations</a></li>
                    </ul>
                </div>

            
                <div>
                    <h3 className="text-white font-semibold text-base mb-4">Company</h3>
                    <ul className="space-y-3">
                        <li><a href="" className="text-gray-400 text-sm hover:text-white">About</a></li>
                        <li><a href="" className="text-gray-400 text-sm hover:text-white">Blog</a></li>
                        <li><a href="" className="text-gray-400 text-sm hover:text-white">Careers</a></li>
                        <li><a href="" className="text-gray-400 text-sm hover:text-white">Press</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold text-base mb-4">Resources</h3>
                    <ul className="space-y-3">
                        <li><a href="" className="text-gray-400 text-sm hover:text-white">Documentation</a></li>
                        <li><a href="" className="text-gray-400 text-sm hover:text-white">Help Center</a></li>
                        <li><a href="" className="text-gray-400 text-sm hover:text-white">Community</a></li>
                        <li><a href="" className="text-gray-400 text-sm hover:text-white">Contact</a></li>
                    </ul>
                </div>

            </div>

         
            <div className="mb-12">
                <h3 className="text-white font-semibold text-base mb-4 lg:hidden">Social Links</h3>
                <div className="hidden lg:block">
                    <p className="text-white font-semibold text-base mb-4">Social Links</p>
                </div>
                <div className="flex gap-3">
                    <a href="" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm font-bold hover:bg-gray-700">
                        in
                    </a>
                    <a href="" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm font-bold hover:bg-gray-700">
                        f
                    </a>
                    <a href="" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm font-bold hover:bg-gray-700">
                        X
                    </a>
                </div>
            </div>

        
            <div className="border-t border-gray-800 mb-6"></div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm">© 2026 Digitools. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <a href="" className="text-gray-500 text-sm hover:text-white">Privacy Policy</a>
                    <a href="" className="text-gray-500 text-sm hover:text-white">Terms of Service</a>
                    <a href="" className="text-gray-500 text-sm hover:text-white">Cookies</a>
                </div>
            </div>

        </div>
    );
};

export default Footer;