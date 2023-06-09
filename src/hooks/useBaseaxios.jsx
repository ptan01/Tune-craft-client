import axios from 'axios';
import React from 'react';

const useBaseaxios = () => {


    const token = localStorage.getItem('access-token')

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:5000',
        timeout: 5000,
        headers: {
            authorization : `bearer ${token}`
        }
      });


    return [axiosInstance]
};

export default useBaseaxios;