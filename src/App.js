import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Component/Pages/Login'
import Signup from './Component/Pages/Signup';
import Home from './Component/Pages/Home';
import RequiredAuth from './Component/Constant/RequiredAuth';
import RequiredAuthSignUp from './Component/Constant/RequiredAuthSignUp';
import RequiredAuthSignIn from './Component/Constant/RequiredAuthSignin';
import RequiredAuthOther from './Component/Constant/RequiredAuthOther'
import LayoutPage from './Component/Constant/LayoutPage/LayoutPage';
import Dashboard from './Component/Pages/Dashboard';

import NotFound from './Component/Pages/NotFound/NotFound';

function App() {
  
  return (
  <Router>
  
    {/* <LayoutPage > */}

    <Routes>
     
      <Route path="/" element={
      <RequiredAuth >
        <Dashboard />
      </RequiredAuth>
      } />
      {/* <Route path="/about" element={
      <RequiredAuth >
        <About />
       </RequiredAuth>
      } />
      <Route path="/contact" element={
      <RequiredAuth >
        <Contact />
       </RequiredAuth>
      } /> */}
     
      <Route path="/login" element={
      <RequiredAuthSignIn >
      <Login />
      </RequiredAuthSignIn>
      
      } />



      <Route path="/signup" element={
      <RequiredAuthSignUp>
        <Signup />
      </RequiredAuthSignUp>
      } />
     <Route path="*" element={
      <RequiredAuthOther >
        <NotFound />
      </RequiredAuthOther>
      } />
   
     </Routes>
    {/* </LayoutPage> */}
</Router>

  );
}

export default App;
