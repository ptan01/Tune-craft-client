import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const [show , setShow] = useState(false)
    const {loginUser, googleLogin} = useContext(AuthContext) ;


    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data)
        loginUser(data.email, data.password)
        .then(result => {
            const user = result.user ;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Login has been success',
                showConfirmButton: false,
                timer: 1000
              })
            console.log(user)
        })
        .catch(err=> {
            console.log(err)
        })
    };

    const loginWithGoogle = (e)=> {
        e.preventDefault()
        
        googleLogin()
        .then(result => {
            const user = result.user ;
            console.log(user)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Login has been success',
                showConfirmButton: false,
                timer: 1000
              })
        })
        .catch(err => {
            console.log(err)
        })
    }



    return (
        <div className='flex h-[50vh] items-center justify-center'>
            <form className='border rounded-lg p-5 h-[40vh] space-y-5' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <span className='flex items-center'>
                        <input {...register("password")} type={show ? 'text' : 'password'} placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        {show ? <FaEyeSlash onClick={()=> setShow(!show)} className='text-2xl'></FaEyeSlash> :  <FaEye onClick={()=> setShow(!show)} className='text-2xl'></FaEye>}
                    </span>
                </div>
                <div>
                    <input className='btn btn-sm w-full' type="submit" value="Login" />
                    <br />
                    <button onClick={loginWithGoogle} className='btn btn-sm w-full mt-5'><FaGoogle className='text-xl'></FaGoogle> Google Login</button>
                </div>
                <div>
                    <p>Don't Have An Account ? Please <Link to='/register' className='text-red-600'>Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;