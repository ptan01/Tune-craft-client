import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBaseaxios from '../../hooks/useBaseaxios';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';



const stripePromise = loadStripe(import.meta.env.VITE_Stripe_pk_Secret)

const Payment = () => {

    const id = useParams().id;
    const [axiosInstance] = useBaseaxios()
    const [classes, setClasses] = useState({})
    useEffect(() => {
        axiosInstance(`/selects/${id}`)
            .then(res => {
                setClasses(res.data)
                console.log(res.data)
            })
    }, [])



    return (
        <div className='w-full'>
            <h2>Class Name : {classes.className}</h2>
            <h2>Price : ${classes.price}</h2>
            <h2>Available seats : {classes.seats}</h2>

            <div className='w-1/2 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm classes={classes}></CheckoutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;