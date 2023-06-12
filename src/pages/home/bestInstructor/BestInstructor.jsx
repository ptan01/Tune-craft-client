import React, { useEffect, useState } from 'react';
import useBaseaxios from '../../../hooks/useBaseaxios';

const BestInstructor = () => {


    const [axiosInstance] = useBaseaxios()
    const [bestInstructor, setBestInstructor] = useState([])

    useEffect(() => {
        axiosInstance('/users/best/instructor')
            .then(res => {
                console.log(res.data)
                setBestInstructor(res.data)
            })
    }, [])


    return (
        <div className='my-20'>
            <div className='text-center my-10'>
                <h1 className='text-3xl font-bold'>Our Best <span className='text-red-600'>Instructors</span></h1>
                <p>There is out best instructor</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-8'>
                {
                    bestInstructor.map(instructor => <div key={instructor._id} className="card w-full hover:bg-blue-300 bg-base-100 shadow-xl">
                        <figure>
                            <div className="avatar py-4">
                                <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={instructor.img} />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{instructor.name}</h2>
                            <p>{instructor.email}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">See Classes</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BestInstructor;