import React,{ useState } from 'react';
import Footer from '../../Pages/Footer/Footer';
import Header from '../../Pages/Header'; 
import ScrollToButton from '../ScrollToTop/ScrollToButton';
import Loader from '../Loader/Loader';
import {useLocation} from 'react-router-dom'
// import ResponsiveAppBar from '../../Pages/Logout/ResponsiveAppBar'; 
const LayoutPage = (props) => {
  const [loader,setLoader]=useState(false);
  const location=useLocation();

  const hideLoader=()=> {
    setLoader(false);
  };
  const showLoader = () => {
    setLoader(true);
  };
  return (
    <>
      {loader ?(
        <Loader /> 
      ) :(
      <>
        <Header tab={location.path} loader={loader} hideLoader={hideLoader} showLoader={showLoader}/>
        {/* <ResponsiveAppBar />     */}
        <div>{props.children}</div>
        <ScrollToButton />
        <Footer />
      </>
      )}        

    </>
    )
}
export default LayoutPage;