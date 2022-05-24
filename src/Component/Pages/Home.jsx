
import {  Paper } from '@material-ui/core';
// import { display } from '@mui/system';
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { CardBody,Card,CardImg,CardTitle,CardText,Button } from 'reactstrap';
import image from '../Assets/Images/2.png'
// import Slider from './Slider/slider';
 const Home = () => {



   const [data,setData]=useState([])
    useEffect(()=>{
      axios.get('https://api.storerestapi.com/products')
      .then((res)=>{
        setData(res.data)
      })
      .catch((e)=>{
        console.log(e);
      })
    },[])

  console.log(data);

   return (
   <>

  
    <div className="mt-4 ">

    {/* {<Slider />} */}
    
    <Paper elevation={0} className="paper-size">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 pd-10 g-2">
    {data.data && data.data.map((item)=>(
        <div className='col-sm-1'>
        <Card className=' '
        // style={{ width: "18rem"}}
         >
          <CardImg
            alt="..."
            src={image}
            top
          />
          <CardBody>
            <CardTitle>{item.title}</CardTitle>
            <CardText>
                {item.slug}
            </CardText>
            <Button
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Go somewhere
            </Button>
          </CardBody>
        </Card>
        </div>
      ))}
      </div>
      </Paper>
    </div>
    </>  
  )
}
export default Home;


