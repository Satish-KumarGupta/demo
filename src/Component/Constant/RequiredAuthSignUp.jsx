import React from 'react'
import { Navigate } from 'react-router-dom';
 const RequiredAuthSignUp = ({children}) => {
    const token=localStorage.getItem('Success') 
  return token ? <Navigate to='/' replace />: children ; 

}

export default RequiredAuthSignUp;