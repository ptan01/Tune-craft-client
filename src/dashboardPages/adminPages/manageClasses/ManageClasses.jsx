import React, { useEffect } from 'react';
import useBaseaxios from '../../../hooks/useBaseaxios';

const ManageClasses = () => {

    const [axiosInstance] = useBaseaxios() ;


    useEffect(()=> {
        axiosInstance('/all/classes')
        .then(res => {
            console.log(res.data)
        })
    },[])


    return (
        <div>
            <h2>this is manage class</h2>
        </div>
    );
};

export default ManageClasses;