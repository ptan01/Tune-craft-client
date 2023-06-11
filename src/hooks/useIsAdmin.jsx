import React, { useContext, useEffect, useState } from 'react';
import useBaseaxios from './useBaseaxios';
import { AuthContext } from '../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useIsAdmin = () => {

    const [axiosInstance] = useBaseaxios()
    const {user,loading} = useContext(AuthContext)


    const {data : isAdmin , isLoading } = useQuery({
        queryKey : ['admin'],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosInstance(`/users/admin/${user?.email}`)
            console.log(res.data)
            return res.data.admin
        }
    })


    return [isAdmin, isLoading]
};

export default useIsAdmin;