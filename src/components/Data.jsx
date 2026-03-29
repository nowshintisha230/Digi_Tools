import React, { use } from 'react';
import Datacart from '../components/Datacart.jsx'
const Data = ({getDataPromise}) => {
    const Datas =use(getDataPromise)
    console.log(Datas)
    return (
        <div>
        <div className='text-center my-7'>
        <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
        <p className='text-gray-500'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>    
        </div>


        <div className='  flex gap-3.5 justify-center items-center'>
 <button className=' btn bg-gradient-to-r from-blue-500 to-purple-500 p-5 rounded-2xl text-white  lg:text-xl font-bold '>Products</button>
 <button className=' btn bg-gradient-to-r from-blue-500 to-purple-500 p-5 rounded-2xl text-white  lg:text-xl font-bold '>Carts</button>
        </div>
<div className='w-11/12 mx-auto my-5 grid lg:grid-cols-3 gap-6'>
    {Datas.map((values)=>

<Datacart values={values}></Datacart>

    )}
</div>





        </div>
    );
};

export default Data;