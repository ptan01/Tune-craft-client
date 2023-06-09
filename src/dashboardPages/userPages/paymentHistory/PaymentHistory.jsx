import React, { useContext, useEffect, useState } from 'react';
import useBaseaxios from '../../../hooks/useBaseaxios';
import { AuthContext } from '../../../provider/AuthProvider';

const PaymentHistory = () => {

    const [axiosInstance] = useBaseaxios();
    const [enrollDetails, setEnorllDetails] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() => {
        axiosInstance(`/payments?email=${user.email}`)
            .then(res => {
                console.log(res.data)
                setEnorllDetails(res.data)
            })
    }, [user])

    return (
        <div>
           <div className='grid grid-cols-2 gap-5 m-2'>
           {
                enrollDetails.map(details => <div key={details._id} className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{details.className}</h2>
                        <p>Date :{new Date(details.date).toLocaleDateString()}</p>
                        <p>Enroll Email : {details.email}</p>
                        <p>Instructor : {details.instructor}</p>
                        <p>Transition Id : {details.transitionId}</p>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default PaymentHistory;