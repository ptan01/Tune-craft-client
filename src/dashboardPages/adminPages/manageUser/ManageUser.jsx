import React, { useEffect, useState } from 'react';
import useBaseaxios from '../../../hooks/useBaseaxios';
import useUser from '../../../hooks/useUser';
import SimpleBanner from '../../../shared/simpleBanner/SimpleBanner';

const ManageUser = () => {

    const [axiosInstance] = useBaseaxios()
    const [users,refetch] = useUser()
    // const [users, setUsers] = useState([])


    // useEffect(() => {
    //     axiosInstance('/users')
    //         .then(res => {
    //             setUsers(res.data)
    //             console.log(res.data)
    //         })
    // }, [])


    const handleInstructor =(id)=>{
        axiosInstance.patch(`/user/instructor/${id}`)
        .then(res => {
            console.log(res.data)
            refetch()
        })

    }


    const handleAdmin =(id)=>{
        axiosInstance.patch(`/user/admin/${id}`)
        .then(res => {
            console.log(res.data)
            refetch()
        })

    }


    return (
        <div>
            <SimpleBanner heading='Manage users' subHeading='update user to instructor or admin'></SimpleBanner>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Cover Img</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>
                                    {idx}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>{user.email}</td>
                                <th>
                                    {user?.role === 'instructor' ? user.role : <button disabled={user?.role==='admin'} onClick={()=>handleInstructor(user._id)} className="btn btn-outline btn-xs">Instructor</button>}
                                </th>
                                <th>
                                    {user?.role === 'admin' ? user.role : <button disabled={user?.role==='instructor'} onClick={()=>handleAdmin(user._id)} className="btn btn-outline btn-xs">Admin</button>}
                                </th>
                            </tr>)
                        }



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUser;