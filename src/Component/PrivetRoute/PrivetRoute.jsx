import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router';
import Loader from '../Loader/Loader';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    const token = localStorage.getItem('access_token')

  if(loading){
    return <Loader></Loader>
  }

    if (!user || !token) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

 
  return children
}

export default PrivetRoute
