import React, { useState } from 'react'

 const ScrollToButton = () => {
     const [visible,setVisible]=useState(false);
     const toggleVisible=()=>{
        const scrolled=document.documentElement.scrollTop;
        if(scrolled > 300){
            setVisible(true);
        }
        else if(scrolled <=300){
            setVisible(false);
        }
     }

     const scrollToTop=()=>{
         window.scrollTo({
             top:0,
             behavior:"smooth"
         })
     };
     window.addEventListener("scroll",toggleVisible)
  return (
    <div onClick={scrollToTop} className="ButtonTopArrow" style={{ display: visible ? "inline" : "none" }}>
        <i className='fa fa-chevron-up' ></i>
    </div>
  )
}
export default ScrollToButton;