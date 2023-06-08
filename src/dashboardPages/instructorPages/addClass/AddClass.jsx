import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddClass = () => {

    const { user } = useContext(AuthContext)


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const imgHostUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgHostKey}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.photo[0]);

        axios.post(imgHostUrl, formData)
            .then(res => {
                console.log(res.data.data.display_url)
                const {className, price, seats,} = data
                const classDetail = {
                    className,
                    price,
                    seats,
                    img : res?.data?.data?.display_url ,
                    instructorEmail : user?.email ,
                    instructorName : user?.displayName,
                    status: 'pending'
                }
               
            })

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