import React from 'react';

const Datacart = ({values}) => {
   
    return (

        <div className='p-4 space-y-3  border-2 bg-gray-100 rounded-2xl shadow-lg'>
       <div className='flex justify-between '>
        <button className='btn w-30 h-30 rounded-full text-7xl'>{values.icon}</button>
       <button
  className={`
    ${
      values.tagType === "new"
        ? "text-yellow-600 bg-amber-200"
        : values.tagType === "popular"
        ? "text-green-700 bg-green-200"
        : values.tagType === "best seller"
        ? "text-blue-600 bg-blue-200"
        : "text-black"
    }
    font-bold text-xs btn rounded-xl
  `}
>
  {values.tag}
</button>
        </div>
            <h1 className='font-bold  text-3xl'>{values.name}</h1>
            <h1 className='text-gray-500'>{values.description}</h1>
            <h1 className='font-bold '><span className='text-3xl'>${values.price}</span><span className='text-gray-500 text-xs'>/{values.validity}</span></h1>

           <div className="flex flex-col gap-2 ">
  {values.features.map((feature, index) => (
    <span key={index} className="text-gray-600 text-l">
      {feature}
    </span>
  ))}
</div>
<button className='btn bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-2xl w-full  text-white  lg:text-xl font-bold'>Buy Now</button>

        </div>
    );
};

export default Datacart;