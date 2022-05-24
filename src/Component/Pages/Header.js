import React, {useState } from "react";
import {NavLink } from "react-router-dom";
import './../navbar.css';


const Header=()=> {

const handleLogout=()=>{
  console.log("called now");
  localStorage.clear();
  window.location.reload();
}

const token= localStorage.getItem('Success');
console.log(token);

const [click, setClick] = React.useState(false);
const handleClick = () => setClick(!click);
const Close = () => setClick(false);
  return (
   <div>

  
    <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <i className="fa fa-home"/> 
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
          
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink  to="/" activeClassName="active" className="nav-links" onClick={handleLogout}>
                {!token ? <>Signin</> : <>Logout</>}
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
            
            
        </div>
      </nav>
   
    </div> 

  );
}
export default Header;