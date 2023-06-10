import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useBaseaxios from '../../../hooks/useBaseaxios';
import Swal from 'sweetalert2';

const AddClass = () => {

    const { user } = useContext(AuthContext)
    const [axiosInstance] = useBaseaxios()
    // const [imageUrl , setImageUrl] = useState('')

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const imgHostUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgHostKey}`

    const onSubmit = data => {

        // const formData = new FormData();
        // formData.append('image', data.photo[0]);


        const { className, price, seats, photo } = data
        const classDetail = {
            className,
            price: parseFloat(price),
            seats: parseFloat(seats),
            img: photo,
            instructorEmail: user?.email,
            instructorName: user?.displayName,
            status: 'pending'
        }
        console.log(classDetail)
        // classdata post
        axiosInstance.post('/classes', classDetail)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })



        // img Post
        // axios.post(imgHostUrl, formData)
        //     .then(res => {
        //         console.log(res.data.data.display_url)
        //         setImageUrl(res.data.data.display_url)
        //     })


        // const {className, price, seats,} = data
        // const classDetail = {
        //     className,
        //     price : parseFloat(price),
        //     seats : parseFloat(seats),
        //     img : imageUrl ,
        //     instructorEmail : user?.email ,
        //     instructorName : user?.displayName,
        //     status: 'pending'
        // }
        // console.log(classDetail)
        // axiosInstance.post('/classes', classDetail)
        // .then(res => {
        //     console.log(res.data)
        // })

        console.log(data)
    };



    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name">Class Name</label>
                        <input {...register("className")} type="text" placeholder="class name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input {...register("price")} type="number" placeholder="price" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="seats">Available seats</label>
                        <input {...register("seats")} type="number" placeholder="seats" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="name">PhotoUrl</label>
                        <input {...register("photo")} type="text" placeholder='Url' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="name">Email</label>
                        <input type="number" placeholder={user?.email} disabled className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="number" placeholder={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
                    </div>

                    {/* <div>
                    <label htmlFor="photo">Photo</label>
                    <input {...register("photo")} type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                </div> */}
                    <div className='text-center'>
                        <input className='btn btn-sm ' type="submit" value="Add Class" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;