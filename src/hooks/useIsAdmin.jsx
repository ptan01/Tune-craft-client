import React, { useContext, useEffect, useState } from 'react';
import useBaseaxios from './useBaseaxios';
import { AuthContext } from '../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useIsAdmin = () => {

    const [axiosInstance] = useBaseaxios()
    const {user} = useContext(AuthContext)


    const {data : isAdmin , isLoading } = useQuery({
        queryKey : ['admin'],
        queryFn: async()=>{
            const res = await axiosInstance(`/users/admin/${user.email}`)
            console.log(res.data)
            return res.data.admin
        }
    })


    return [isAdmin, isLoading]
};

export default useIsAdmin;