import React from 'react'
import image from '../../Assets/Images/404.png'
 const NotFound = () => {
  return (
    <div className='d-flex justify-content-center mt-5' >
        <h2>Page not Found</h2>
        <img src={image} className="d-flex justify-content-center " alt='not' />
    </div>
  )
}
export default NotFound;