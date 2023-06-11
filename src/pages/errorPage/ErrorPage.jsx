import React from 'react';
import groovyWalkAnimation from "../../assets/27589-error.json";
import { LottiePlayer } from 'lottie-react';
import Lottie from "lottie-react";
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError()
    console.log(error)


    return (
        <div className='w-2/3 mx-auto'>
            <div className='text-center'>
                <h1>{error.status}</h1>
                <h1>{error.data}</h1>
                <h1>{error.statusText}</h1>
            </div>
            {/* <LottiePlayer animationData={groovyWalkAnimation} loop={true}></LottiePlayer> */}
            <div>
                <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>
        </div>
    );
};

export default ErrorPage;