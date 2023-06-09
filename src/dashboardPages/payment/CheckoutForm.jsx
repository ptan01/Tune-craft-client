import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useBaseaxios from '../../hooks/useBaseaxios';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckoutForm = ({ classes }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [axiosInstance] = useBaseaxios()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (classes.price > 0) {
            axiosInstance.post('create-payment-intent', { price: classes.price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [classes])



    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log(error)
            setCardError(error)
        }
        else {
            setCardError('')
            console.log(paymentMethod)
        }


        const { paymentIntent, error: carderror } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (carderror) {
            setCardError(carderror)
        }

        console.log(paymentIntent)
        if (paymentIntent.status === "succeeded") {

            // reduced seats 
            axiosInstance.patch(`/selects/reduced-seats?id=${classes.classId}`)
                .then(res => {
                    console.log(res.data)
                })

            // save data to payment details
            const paymentDetails = {
                className: classes?.className,
                selectedId: classes?._id,
                classesId: classes?.classId,
                instructor: classes?.instructorEmail,
                date: new Date(),
                transitionId: paymentIntent?.id,
                email: user?.email,

            }

            axiosInstance.post('/payments', paymentDetails)
                .then(res => {
                    console.log(res.data)
                })


            // deleted form selected class and insert enrollPayment Db
            axiosInstance.delete(`/selects/delete/${classes._id}`)
                .then(res => {
                    console.log(res.data)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Payment Success Fully Done',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    navigate('/dashboard/selectclass')
                })



        }


    }



    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;