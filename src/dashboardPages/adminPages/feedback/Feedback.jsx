import React, { useEffect, useState } from 'react';
import useBaseaxios from '../../../hooks/useBaseaxios';
import { useParams } from 'react-router-dom';

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

    const handleFeedback = (e)=>{
        e.preventDefault()
        const feedback = e.target.feedback.value ;
        console.log(feedback)
        axiosInstance.patch(`/classes/feedback/${id}` ,{feedback: feedback})
        .then(res => {
            console.log(res.data)
        })

    }


    return (
        <div>
            {/* TODO: some unic header */}
            <h1 className='text-3xl'>Send Feedback About {classes.className}</h1>
            <form onSubmit={handleFeedback}>
                <textarea name='feedback' placeholder="Write your Feedback" className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
                <br />  
                <input className='btn' type="submit" value="Send Feedback" />
            </form>
        </div>
    );
};

export default Feedback;