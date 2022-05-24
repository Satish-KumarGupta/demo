import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import  {getAuth,signInWithEmailAndPassword}  from 'firebase/auth';
import app from '../Firebase/Firebase';
import {GithubAuthProvider,GoogleAuthProvider,FacebookAuthProvider,TwitterAuthProvider,signInWithPopup } from 'firebase/auth';
import { getDatabase,set,ref } from 'firebase/database';

// import Facebook from '../Facebook/facebook'
const Login = () => {
 

  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
  const navigate=useNavigate();
  const location=useLocation();
  
  
  const handleChangeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handleChangePassword=(e)=>{
    setPassword(e.target.value)
  }
  const loginSubmit = (e) =>{
    e.preventDefault();
    const data={
      email:email,
      password: password
    }
    console.log(data);

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
      console.log(user);
    localStorage.setItem("Success",true)
     navigate('/'+location.search);
     window.location.reload();
    // ...
  })
  //  axios.get("https://625919e5c5f02d964a4c5862.mockapi.io/api/users",email,password)
  //  .then((res)=>{
  //   console.log("result",res);
  //     if(res.status===200)
  //     {
  //       alert("call")
  //       localStorage.setItem("Success",true)
  //       navigate('/'+location.search);
  //     }
  //     else{
  //       navigate('/login'+location.search);
  //     }
  //   })
    .catch((err)=>{
      console.log(err);
      <Link to='/signup' />
    })
  }


  const googleProvider= new GoogleAuthProvider();
  const facebookProvider= new FacebookAuthProvider();
  const twitterProvider=new TwitterAuthProvider();
  const gitprovider= new GithubAuthProvider();
  const database=getDatabase();
  const auth=getAuth();

  const GoogleLogin=()=>{

    console.log('called');
    signInWithPopup(auth,googleProvider) 
    .then((res)=>{
      console.log(res);
      const uid=res.user.uid;

      set(ref(database,'logedUser/'+ uid),{
        email: res._tokenResponse.email,
      })
      localStorage.setItem("Success",true)
      navigate('/'+location.search)
      window.location.reload();
    })
    .catch((err)=>{
      console.log(err);
    })
  
  }
  const GithubLogin=()=>{

    console.log('called');
    signInWithPopup(auth,gitprovider) 
    .then((res)=>{
      console.log(res);
      const uid=res.user.uid;

      // console.log("database",database);
      set(ref(database,'logedUser/'+uid),{
        email: res._tokenResponse.email,
      })
      localStorage.setItem("Success",uid)
      navigate('/'+location.search)
      window.location.reload();
    })
    .catch((err)=>{
      console.log(err);
    })
  
  }
  const FacebookLogin=()=>{

    console.log('called');
    signInWithPopup(auth,facebookProvider) 
    .then((res)=>{
      console.log("result",res);
      const credential = FacebookAuthProvider.credentialFromResult(res);
      const accessToken = credential.accessToken;
      const uid=res.user.uid;
      set(ref(database,'logbyFacebook/'+uid),{
        email: res._tokenResponse.email,
        token:res._tokenResponse.idToken,
      })
      localStorage.setItem("Success",true)
      navigate('/'+location.search)
      window.location.reload();
    })
    .catch((err)=>{
      console.log(err);
    })
  
  }
  const TwitterLogin=()=>{
    signInWithPopup(auth,twitterProvider) 
    .then((result)=>{
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const secret = credential.secret;
      console.log("result",result,token,secret);
      // const uid=res.user.uid;
      // set(ref(database,'logbyTwitter/'+uid),{
      //   email: res._tokenResponse.email,
      //   token:res._tokenResponse.idToken,
      // })
      // localStorage.setItem("Success",uid)
      // navigate('/'+location.search)
    })
    .catch((err)=>{
      console.log(err);
    })
  
  }


  return (
    <div className='contain'>
    
    <form className='box-layout' onSubmit={loginSubmit}>
        <h3 className='text-center'>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={handleChangeEmail}
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3 col-12 ">
          <label>Password</label>
          <input 
            type="password"
          
            value={password}
            className="form-control"
            onChange={handleChangePassword}
            placeholder="Enter password"
            required
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
          
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={loginSubmit}>
            Submit
          </button>
        </div>
        <div className='d-flex mt-2 justify-content-end w-20'>
        <Link to='/signup'>signup</Link>
        </div>
        <p className='mid-line-content'><span>Social Login</span></p>
         <div className='d-flex justify-content-center gap-2'>
          <button className="btn  mt-2 btn-primary" onClick={()=>{GoogleLogin()}}>
           <i className='fa fa-google' />
          </button>
          {/* <button className="btn mt-2 btn-primary" >
            <Facebook />
          </button> */}
          <button className="btn  mt-2 btn-primary"  onClick={()=>{FacebookLogin()}} >
           <i className='fa fa-facebook' />
          </button>
          <button className="btn mt-2 btn-primary"  onClick={()=>{TwitterLogin()}} >
           <i className='fa fa-twitter' />
          </button>
          <button className="btn mt-2 btn-primary"  onClick={()=>{GithubLogin()}} >
           <i className='fa fa-github' />
          </button>
        </div>
      </form>

  </div>
    )
}
export default Login;