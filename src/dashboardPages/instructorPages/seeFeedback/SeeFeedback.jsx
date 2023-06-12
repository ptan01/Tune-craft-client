import React, { useEffect, useState } from 'react';
import useBaseaxios from '../../../hooks/useBaseaxios';
import { useParams } from 'react-router-dom';

const SeeFeedback = () => {


    const id = useParams().id

    const [axiosInstance] = useBaseaxios()
    const [classes, setClasses] = useState({})



    useEffect(() => {
        axiosInstance(`http://localhost:5000/classes/${id}`)
            .then(res => {
                setClasses(res.data)
                console.log(res.data)
            })
    }, [])




    return (
        <div>

            <div className="card w-96 bg-blue-300 shadow-xl">
                <div className="card-body">
                    <p>{classes.feedback ? classes.feedback : 'This classes Have no FeedBack'}</p>
                </div>
            </div>


        </div>
    );
};

export default SeeFeedback;