import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useBaseaxios from '../../hooks/useBaseaxios';
import { AuthContext } from '../../provider/AuthProvider';

const CheckoutForm = ({classes}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext)
    const [axiosInstance] = useBaseaxios()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')


    useEffect(()=>{
        if(classes.price > 0){
            axiosInstance.post('create-payment-intent', {price : classes.price})
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
        }
    },[classes])



    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log(error)
            setCardError(error)
        }
        else{
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

          if(carderror){
            setCardError(carderror)
          }

          console.log(paymentIntent)


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