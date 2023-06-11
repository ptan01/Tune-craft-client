import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import useIsAdmin from '../hooks/useIsAdmin';

const AdminRoute = ({children}) => {


    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isLoading] = useIsAdmin()



    if(loading || isLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin){
        return children
    }


    return <Navigate to='/'></Navigate>
};

export default AdminRoute;