import React,{useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase,set,ref } from 'firebase/database';


const Signup = () => {
     const navigate=useNavigate();
     const location=useLocation();
  

    const auth = getAuth();

    const signup=Yup.object().shape({
      email:Yup.string().required("Enter the email"),
      password:Yup.string().required("Enter the password")
    })
   
    const SignUpSubmit=(e)=>{
      // e.preventDefault();

      //   const data={
      //     email:e.email,
      //     password: e.password
      //   }
      //  axios.post("https://625919e5c5f02d964a4c5862.mockapi.io/api/users",data)
      //  .then((res)=>{
      //    localStorage.setItem("Data",e.email);
      //    navigate('/login'+location.search);        
         
      //  })
      //  .catch((err)=>{

      //    console.log(err);
      //  })

      
        createUserWithEmailAndPassword(auth,e.email,e.password)
        .then((res)=>{
          const user=res.user;
          console.log(user);
          const data=getDatabase()
          set(ref(data,'UserTable/'),{
            email:e.email,
            password:e.password
          })
          localStorage.setItem("Data",e.email);
          navigate('/login'+location.search);    
        })
        .catch((err)=>{
          console.log(err);
        })
       
    }



  return (
    <div className='contain'>
    <Formik
      initialValues={{
        email:'',
        password:''
      }}
      validationSchema={signup}
      onSubmit={SignUpSubmit}
    >
    {({ errors, touched,Values,handleChange,SignUpSubmit }) => (

    
    <Form className='box-layout' SignUpSubmit>
        <h3 className='text-center'>Registration</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name='email'
            className="form-control"
            value={Values}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />

        </div>
        {touched.email && errors.email && <div>{errors.email}</div>}
        <div className="mb-3">
          <label>Password</label>
          <input
            name='password'
            type="password"
            className="form-control"
            value={Values}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>
          {touched.password && errors.password && <div>{errors.password}</div>}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary"
          onClick={SignUpSubmit}
          >
            Submit
          </button>
        </div>
      </Form>
        )}
      </Formik>
  </div>
    )
}
export default Signup;