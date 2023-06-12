import React, { useEffect, useState } from 'react';
import useBaseaxios from '../../../hooks/useBaseaxios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import SimpleBanner from '../../../shared/simpleBanner/SimpleBanner';

const Feedback = () => {

    const id = useParams().id

    const [axiosInstance] = useBaseaxios()
    const [classes, setClasses] = useState({})


    useEffect(() => {
        axiosInstance(`/classes/${id}`)
            .then(res => {
                console.log(res.data)
                setClasses(res.data)
            })
    }, [])

    const handleFeedback = (e) => {
        e.preventDefault()
        const feedback = e.target.feedback.value;
        console.log(feedback)
        axiosInstance.patch(`/classes/feedback/${id}`, { feedback: feedback })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Feedback Send Success Fully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }


    return (
        <div>
            <SimpleBanner heading="send Feedback" subHeading='Right your feedback to send instructor'></SimpleBanner>
            <div className='text-center'>
                <h1 className='text-3xl'>Send Feedback About <span className='text-red-600'>{classes.className}</span></h1>
                <form onSubmit={handleFeedback}>
                    <textarea name='feedback' placeholder="Write your Feedback" className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
                    <br />
                    <input className='btn btn-outline bg-blue-300' type="submit" value="Send Feedback" />
                </form>
            </div>
        </div>
    );
};

export default Feedback;