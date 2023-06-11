import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import useIsInstructor from '../hooks/useIsInstructor';

const InstructorRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const [isInstructor, isLoading] = useIsInstructor()


    if(loading || isLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isInstructor){
        return children
    }


    return <Navigate to='/'></Navigate>


};

export default InstructorRoute;