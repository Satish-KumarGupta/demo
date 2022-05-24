import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';

const RequiredAuthOther = ({children}) => {
    useEffect(()=>{
       //  const token=localStorage.getItem('Success') 
       //  return !token ? children : <Navigate to="/login" replace/>;
       })
       const token=localStorage.getItem('Success') 
       return token ? children : <Navigate to="/notfound" />;
}
export default RequiredAuthOther;