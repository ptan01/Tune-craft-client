import React, { useContext, useEffect, useState } from 'react';
import useBaseaxios from '../../../hooks/useBaseaxios';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyClass = () => {

    const { user } = useContext(AuthContext)
    const [classes, setClasses] = useState([])
    const [totalEnroll, setTotalEnroll] = useState(0)

    const [axiosInstance] = useBaseaxios()

    useEffect(() => {
        axiosInstance(`/instructor/classes?email=${user?.email}`)
            .then(res => {
                console.log(res.data)
                setClasses(res.data)
            })
    }, [user])


    useEffect(()=> {
        axiosInstance(`/payments/total/${user.email}`)
        .then(res => {
            console.log(res.data.count)
            setTotalEnroll(res.data.count)
        })
    },[user])

    return (
        <div>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-title">Your Enroll Student</div>
                    <div className="stat-value">{totalEnroll}</div>
                    <div className="stat-desc">It's better than last month</div>
                </div>

            </div>

            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Cover</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Send FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((singleClass, idx) => <tr key={singleClass._id}>
                                <td>
                                    {idx}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={singleClass.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {singleClass.className}
                                </td>
                                <td>{singleClass.status}</td>
                                <th>
                                    <Link to={`/dashboard/update/${singleClass._id}`}><button className="btn btn-ghost btn-xs">update</button></Link>
                                </th>
                                <th>
                                    <button className="btn btn-ghost btn-xs">feedBack</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;