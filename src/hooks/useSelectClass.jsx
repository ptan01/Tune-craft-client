import React, { useContext } from 'react';
import useBaseaxios from './useBaseaxios'
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../provider/AuthProvider';

const useSelectClass = () => {

    const [axiosInstance] =useBaseaxios()
    const {user, loading} = useContext(AuthContext)

    const {data : selectedclass = [], refetch} = useQuery({
        queryKey :['selects'],
        enabled: !loading,
        queryFn: async ()=>{
            const req = await axiosInstance(`/selects?email=${user?.email}`)
            console.log(req.data)
            return req.data
        }
    })



    return [selectedclass, refetch]
};

export default useSelectClass;