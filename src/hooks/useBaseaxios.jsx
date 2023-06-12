import axios from 'axios';
import React from 'react';

const useBaseaxios = () => {


    const token = localStorage.getItem('access-token')

    const axiosInstance = axios.create({
        baseURL: 'https://tune-craft-server.vercel.app',
        timeout: 5000,
        headers: {
            authorization : `bearer ${token}`
        }
      });


    return [axiosInstance]
};

export default useBaseaxios;