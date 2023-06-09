import React from 'react';
import useSelectClass from '../../../hooks/useSelectClass';
import { Link } from 'react-router-dom';

const SelectClass = () => {

    const [selectedclass] = useSelectClass()



    return (
        <div className=' w-full'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Cover</th>
                            <th>ClassName</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedclass.map((classes, idx) => <tr key={classes._id}>
                                <th>{idx}</th>
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
                                <td>{classes.price}</td>
                                <td>
                                   <Link to={`/dashboard/payment/${classes._id}`}><button className="btn btn-ghost btn-xs">Pay</button></Link>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectClass;