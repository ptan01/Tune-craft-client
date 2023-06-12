import React from 'react';
import useSelectClass from '../../../hooks/useSelectClass';
import { Link } from 'react-router-dom';
import useBaseaxios from '../../../hooks/useBaseaxios';
import Swal from 'sweetalert2';
import SimpleBanner from '../../../shared/simpleBanner/SimpleBanner';

const SelectClass = () => {

    const [selectedclass, refetch] = useSelectClass()
    const [axiosInstance] = useBaseaxios()


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/selects/${id}`)
                .then(res => {
                    console.log(res.data)
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            
            }
          })
    }


    return (
        <div className=' w-full'>
            <SimpleBanner heading="your selected class" subHeading="pay your selected class"></SimpleBanner>
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
                                    <button onClick={()=> handleDelete(classes._id)} className="btn btn-ghost btn-xs">Delete</button>
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