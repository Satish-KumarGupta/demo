import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getDatabase} from "firebase/database"

// const firebaseConfig={
//     apiKey: "AIzaSyBi3MCaP__kDxyvORgVVuWaJyaczQDB40k",
//     authDomain: "fir-f2ae6.firebaseapp.com",
//     projectId: "fir-f2ae6",
//     storageBucket: "fir-f2ae6.appspot.com",
//     messagingSenderId: "702784443389",
//     appId: "1:702784443389:web:f5e97365535be026f5ff94",
//     measurementId: "G-CHTSJ3KH6Z"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCgsMNYc-9rzpWeZK2fGT7Kl7vHmbG2SDk",
    authDomain: "expanded-poet-347304.firebaseapp.com",
    projectId: "expanded-poet-347304",
    storageBucket: "expanded-poet-347304.appspot.com",
    messagingSenderId: "673604053377",
    appId: "1:673604053377:web:3c57fbbe5db94b44b0e080",
    measurementId: "G-H8JTLZD002"
  };
  
const app=initializeApp(firebaseConfig);
const database=getDatabase(app);
const auth=getAuth(app);

export default {app,auth,database};