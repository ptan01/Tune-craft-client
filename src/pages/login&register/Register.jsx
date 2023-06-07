import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {

    const [error , setError] = useState('')

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setError('')
        console.log(data)
        if(data.password !== data.confirmPassword){
            setError('confirm password did not match')
            return
        }
    };


    return (
      
          <div className='flex min-h-[70vh] items-center justify-center'>
            <form className='border rounded-lg p-5 min-h-[50vh] space-y-5' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-3xl font-bold text-red-600'>Register</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input {...register("name")} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="photo">Photo</label>
                    <input {...register("photo")} type="text" placeholder="Photo Url" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input {...register("password", { required: true, minLength: 6 ,pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/})} type='password' placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    {errors.password?.type === 'pattern' && <p role="alert" className='text-red-600'>password must have one uppercase <br /> and one special character</p>}
                    {errors.password?.type === 'minLength' && <p role="alert" className='text-red-600'>password must have 6 character</p>}
                </div>
                <div>
                    <label htmlFor="password">Confirm Password</label>
                    <input {...register("confirmPassword")} type='password' placeholder="Password" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <input className='btn btn-sm w-full' type="submit" value="Register" />
                </div>
                <div>
                    <p className='text-red-600'>{error}</p>
                    <p>Already Have An Account ? Please <Link to='/login' className='text-red-600'>Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;