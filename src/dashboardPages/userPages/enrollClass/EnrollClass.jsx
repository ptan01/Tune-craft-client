import React, { useContext, useEffect, useState } from 'react';
import useBaseaxios from '../../../hooks/useBaseaxios';
import { AuthContext } from '../../../provider/AuthProvider';
import SimpleBanner from '../../../shared/simpleBanner/SimpleBanner';

const EnrollClass = () => {

    const { user } = useContext(AuthContext);
    const [axiosInstance] = useBaseaxios();
    const [enrollClass, setEnrollClass] = useState([])




    useEffect(() => {
        axiosInstance(`/enroll?email=${user.email}`)
            .then(res => {
                console.log(res.data)
                setEnrollClass(res.data)
            })
    }, [user])



    return (
        <div>
            <SimpleBanner heading="your enroll class" subHeading="your success fully payment classes"></SimpleBanner>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Cover</th>
                            <th>Name</th>
                            <th>Student</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {
                        enrollClass.map((classes, idx) => <tr key={classes._id}>
                            <th>
                                {idx}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classes.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {classes.className}
                            </td>
                            <td>{classes.studentEmail}</td>
                            <td>{classes.price}</td>
                            
                        </tr> )
                    }
                        

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrollClass;