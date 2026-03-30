import React from 'react';

const Performance = () => {
    return (
        <div className='flex justify-center items-center rounded p-8 bg-gradient-to-r from-blue-500 to-purple-500'>
            <div className='flex items-center gap-0'>

                <div className='flex flex-col items-center px-10 lg:px-16'>
                    <h1 className='text-white font-bold text-3xl'>50k+</h1>
                    <p className='text-white font-thin lg:text-xl'>Active Users</p>
                </div>

                <div className='h-12 w-[1px] bg-white opacity-40'></div>

                <div className='flex flex-col items-center px-10 lg:px-16'>
                    <h1 className='text-white font-bold text-3xl'>200+</h1>
                    <p className='text-white font-thin lg:text-xl'>Premium Tools</p>
                </div>

                <div className='h-12 w-[1px] bg-white opacity-40'></div>

                <div className='flex flex-col items-center px-10 lg:px-16'>
                    <h1 className='text-white font-bold text-3xl'>4.9</h1>
                    <p className='text-white font-thin lg:text-xl '>rating</p>
                </div>

            </div>
        </div>
    );
};

export default Performance;