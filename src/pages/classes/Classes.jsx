import React, { useEffect, useState } from 'react';
import useBaseaxios from '../../hooks/useBaseaxios';
import ClassesCard from './classesCard';

const Classes = () => {

    const [axiosInstance] = useBaseaxios()
    const [allclasses, setAllClasses] = useState([])



    useEffect(()=>{
        fetch('http://localhost:5000/all/classes')
        .then(res => res.json())
        .then(data => setAllClasses(data))
        // axiosInstance('/all/classes')
        // .then(res => {
        //     setAllClasses(res.data)
        // })
    },[])

    return (
        <div>
            {/* TODO: simple header */}
            <div className='grid grid-cols-2 gap-5'>
            {
                allclasses.map(classes => <ClassesCard key={classes._id} classes={classes}></ClassesCard>)
            }
            </div>
        </div>
    );
};

export default Classes;