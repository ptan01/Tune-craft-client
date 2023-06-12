import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopularClasses = () => {

    const [popularClasses, setPopularClasses] = useState([])

    useEffect(() => {
        fetch('https://tune-craft-server.vercel.app/popular/classes')
            .then(res => res.json())
            .then(data => {
                setPopularClasses(data)
            })
    }, [])






    return (
        <div className='my-20'>
            <div className='text-center my-10'>
                <h1 className='text-3xl font-bold'>Our Popular<span className='text-red-600'>Classes</span></h1>
                <p>Here is Our Numerous Classes</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-8'>
                {
                    popularClasses.map(classes => <div className={`${classes.seats < 1 ? " bg-red-600" : " "} card hover:bg-blue-300 card-side bg-base-100 shadow-xl`}>
                        <figure><img className='lg:w-[400px] lg:h-[300px]' src={classes.img} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{classes.className}</h2>
                            <p>Instructor name: {classes.instructorName}</p>
                            <p>Available seats: {classes.seats}</p>
                            <p>Price: ${classes.price}</p>
                            <div className="card-actions justify-end">
                                <Link to='/classes'><button className="btn btn-primary">Show All</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;