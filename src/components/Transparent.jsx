import React from 'react';

const Transparent = () => {
  return (
    <div className="px-4 py-12 text-center font-sans">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Simple, Transparent Pricing</h1>
      <p className="text-gray-500 mb-10 text-sm">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">

        <div className="bg-white border border-gray-200 rounded-2xl p-6 text-left">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Starter</h2>
          <p className="text-sm text-gray-500 mb-4">Perfect for getting started</p>
          <div className="text-5xl font-extrabold text-gray-900 mb-1">
            $0<span className="text-sm font-normal text-gray-500 ml-1">/Month</span>
          </div>
          <ul className="mt-4 mb-6 space-y-2">
            <li className="flex items-center gap-2 text-sm text-gray-600">
             ✔️ Access to 10 free tools
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
             ✔️ Basic templates
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              ✔️ Community support
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">✔️ 1 project per month
            </li>
          </ul>
          <button className="w-full py-3 rounded-full font-semibold text-sm bg-purple-600 text-white border-none cursor-pointer">
            Get Started Free
          </button>
        </div>

        {/* Pro - Featured */}
        <div className="relative bg-purple-600 rounded-2xl p-6 pt-10 text-left">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-50 text-yellow-700 text-xs font-semibold px-4 py-1 rounded-full border border-yellow-200 whitespace-nowrap">
            Most Popular
          </span>
          <h2 className="text-lg font-semibold text-white mb-1">Pro</h2>
          <p className="text-sm text-purple-200 mb-4">Best for professionals</p>
          <div className="text-5xl font-extrabold text-white mb-1">
            $29<span className="text-sm font-normal text-purple-200 ml-1">/Month</span>
          </div>
          <ul className="mt-4 mb-6 space-y-2">
            <li className="flex items-center gap-2 text-sm text-white">
             ✔️ Access to all premium tools
            </li>
            <li className="flex items-center gap-2 text-sm text-white">
              ✔️Unlimited templates
            </li>
            <li className="flex items-center gap-2 text-sm text-white">
              ✔️ Priority support
            </li>
            <li className="flex items-center gap-2 text-sm text-white">
            ✔️ Unlimited projects
            </li>
            <li className="flex items-center gap-2 text-sm text-white">
            ✔️ Cloud sync
            </li>
            <li className="flex items-center gap-2 text-sm text-white">
            ✔️ Advanced analytics
            </li>
          </ul>
          <button className="w-full py-3 rounded-full font-semibold text-sm bg-white text-purple-600 border-none cursor-pointer">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 text-left">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Enterprise</h2>
          <p className="text-sm text-gray-500 mb-4">For teams and businesses</p>
          <div className="text-5xl font-extrabold text-gray-900 mb-1">
            $99<span className="text-sm font-normal text-gray-500 ml-1">/Month</span>
          </div>
          <ul className="mt-4 mb-6 space-y-2">
            <li className="flex items-center gap-2 text-sm text-gray-600"> 
             ✔️ Everything in Pro
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
            ✔️ Team collaboration
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
             ✔️ Custom integrations
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
             ✔️ Dedicated support
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
            ✔️ SLA guarantee
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
             ✔️ Custom branding
            </li>
          </ul>
          <button className="w-full py-3 rounded-full font-semibold text-sm bg-purple-600 text-white border-none cursor-pointer">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Transparent;