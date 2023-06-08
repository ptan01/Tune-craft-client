import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const loginUser = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const updateUser = (user,name, img) => {
        setLoading(true)
        return  updateProfile(user, {displayName: name, photoURL: img} )
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, logedUser => {
            setUser(logedUser)
            if (logedUser) {
                axios.post('http://localhost:5000/jwt', { email: logedUser.email })
                    .then(res => {
                        setLoading(false)
                        localStorage.setItem('access-token', res.data.token)
                    })
            }
            else{
                localStorage.removeItem('access-token')
            }

        })

        return () => unsubscribe()

    }, [])

    const authInfo = {
        user,
        createUser,
        loading,
        loginUser,
        logOut,
        googleLogin,
        updateUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;