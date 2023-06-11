import React, { useContext, useEffect, useState } from 'react';
import useBaseaxios from './useBaseaxios';
import { AuthContext } from '../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useIsInstructor = () => {

    const {user} = useContext(AuthContext)
    const [axiosInstance] = useBaseaxios()
    // const [isInstructor, setIsInstructor] = useState(null) 


    const {data: isInstructor, isLoading} = useQuery({
        queryKey: ['instructor'],
        queryFn: async()=> {
            const res = await axiosInstance(`/users/instructor/${user.email}`)
            console.log(res.data)
            return res.data.instructor
        }
    })


    // useEffect(()=>{
    //     axiosInstance(`/users/instructor/${user.email}`)
    //     .then(res => {
    //         console.log(res.data)
    //         setIsInstructor(res.data.instructor)
    //     })
    // },[user])




    return [isInstructor, isLoading]
};

export default useIsInstructor;