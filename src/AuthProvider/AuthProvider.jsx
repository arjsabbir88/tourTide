import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
import axios from 'axios';



export const AuthContext = createContext();
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    // logIn user by the login page
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password).finally(() => setLoading(false));
    }

    // create user by the registration page

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password).finally(() => setLoading(false));
    }


    const updateUser = (updateData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updateData).finally(() => setLoading(false));
    }

    // login with google
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider).finally(() => setLoading(false))
    }

    // logout functionality
    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('access_token')
        return signOut(auth).finally(() => setLoading(false));
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)

            if(currentUser?.email){
                const userData = {email: currentUser.email}
                axios.post('http://localhost:3000/jwt',userData)
                .then(res=>{
                    // console.log('token after jwt',res.data);
                    const token = res.data.token;
                    // console.log(token)

                    // now set token in the localStorage

                    localStorage.setItem('access_token',token)

                }).catch(error=>{
                    console.log(error)
                })
            }
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authData = {
        user,
        signIn,
        createUser,
        setUser,
        updateUser,
        loginWithGoogle,
        logOut,
        loading
    }

    return <AuthContext value={authData}>{children}</AuthContext>
}
