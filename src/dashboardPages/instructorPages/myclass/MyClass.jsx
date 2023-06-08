import React, { useContext, useEffect, useState } from 'react';
import useBaseaxios from '../../../hooks/useBaseaxios';
import { AuthContext } from '../../../provider/AuthProvider';

const MyClass = () => {

    const { user } = useContext(AuthContext)
    const [classes, setClasses] = useState([])

    const [axiosInstance] = useBaseaxios()

    useEffect(() => {
        axiosInstance(`/instructor/classes?email=${user?.email}`)
            .then(res => {
                console.log(res.data)
                setClasses(res.data)
            })
    }, [user])

    return (
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
                                <button className="btn btn-ghost btn-xs">update</button>
                            </th>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyClass;