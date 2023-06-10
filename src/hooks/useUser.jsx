import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useBaseaxios from './useBaseaxios';

const useUser = () => {

    const [axiosInstance] = useBaseaxios()

    const {data: users = [], refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async ()=> {
            const res = await axiosInstance('/users')
            return res.data
        }
    })



    return [users, refetch]
};

export default useUser;