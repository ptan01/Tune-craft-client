import React from 'react';

const SimpleBanner = ({heading, subHeading}) => {
    return (
        <div className='bg-blue-300 py-10 text-center mb-5'>
            <h1 className='text-4xl uppercase text-red-600 font-bold'>{heading}</h1>
            <p className='text-xl uppercase font-semibold'>{subHeading}</p>
        </div>
    );
};

export default SimpleBanner;