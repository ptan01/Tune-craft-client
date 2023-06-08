import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useBaseaxios from '../../../hooks/useBaseaxios';
import Swal from 'sweetalert2';

const AddClass = () => {

    const { user } = useContext(AuthContext)
    const [axiosInstance] = useBaseaxios()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const imgHostUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgHostKey}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.photo[0]);


        const {className, price, seats,} = data
        const classDetail = {
            className,
            price : parseFloat(price),
            seats : parseFloat(seats),
            img : 'https://images.unsplash.com/photo-1619558041249-0523903712e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' ,
            instructorEmail : user?.email ,
            instructorName : user?.displayName,
            status: 'pending'
        }
        console.log(classDetail)
        // classdata post
        axiosInstance.post('/classes', classDetail)
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
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
        //         const {className, price, seats,} = data
        //         const classDetail = {
        //             className,
        //             price : parseFloat(price),
        //             seats : parseFloat(seats),
        //             img : res?.data?.data?.display_url ,
        //             instructorEmail : user?.email ,
        //             instructorName : user?.displayName,
        //             status: 'pending'
        //         }
        //         console.log(classDetail)
        //         axiosInstance.post('/classes', classDetail)
        //         .then(res => {
        //             console.log(res.data)
        //         })
               
        //     })

        // console.log(data)
    };



    return (
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
                    <label htmlFor="name">Email</label>
                    <input type="number" placeholder={user?.email} disabled className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="number" placeholder={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="photo">Photo</label>
                    <input {...register("photo")} type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                </div>
                <div>
                    <input className='btn btn-sm ' type="submit" value="Add Class" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;