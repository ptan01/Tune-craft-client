import React, { useEffect, useState } from 'react';
import useBaseaxios from '../../hooks/useBaseaxios';

const Instructors = () => {

    const [axiosInstance] = useBaseaxios();
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        axiosInstance('/users/instructor')
            .then(res => {
                setInstructors(res.data)
                console.log(res.data)
            })
    }, [])

    return (
        <div>
            <h1>this is instructor page</h1>

            <div className='grid grid-cols-3 gap-5'>
                {
                    instructors.map(instructor => <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
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

export default Instructors;