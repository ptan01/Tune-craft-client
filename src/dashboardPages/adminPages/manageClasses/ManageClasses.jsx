import React, { useEffect, useState } from 'react';
import useBaseaxios from '../../../hooks/useBaseaxios';
import { Link } from 'react-router-dom';

const ManageClasses = () => {

    const [axiosInstance] = useBaseaxios();

    const [allClasses, setAllclasses] = useState([])
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        axiosInstance('/all/classes')
            .then(res => {
                console.log(res.data)
                setAllclasses(res.data)
            })
    }, [refetch])

    const handelApprove =(id)=>{
        axiosInstance.patch(`/classes/approve/${id}`)
            .then(res => {
                console.log(res.data)
                setRefetch(!refetch)
            })
    }

    const handelDeny =(id)=>{
        axiosInstance.patch(`/classes/deny/${id}`)
            .then(res => {
                console.log(res.data)
                setRefetch(!refetch)
            })
    }

    return (
        <div>
            <h2>this is manage class</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Classes</th>
                            <th>Instructor</th>
                            <th>Price and seats</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Dany</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClasses.map(classes => <tr key={classes._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classes.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{classes.className}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {classes.instructorName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{classes.instructorEmail}</span>
                                </td>
                                <td>
                                    Price:{classes.price}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Seats: {classes.seats}</span>
                                </td>
                                <td>
                                    {classes.status}
                                </td>
                                <th>
                                    <button onClick={()=>handelApprove(classes._id)} disabled={classes.status === 'approved'} className="btn btn-outline btn-xs">Approve</button>
                                </th>
                                <th>
                                    <button onClick={()=> handelDeny(classes._id)} disabled={classes.status === 'deny'} className="btn btn-outline btn-xs">Deny</button>
                                </th>
                                <th>
                                    <Link to={`/dashboard/feedback/${classes._id}`}><button className="btn btn-outline btn-xs">Feedback</button></Link>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;