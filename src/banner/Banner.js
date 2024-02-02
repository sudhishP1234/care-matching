import React from 'react'
 import '../App.css';  
import Tab from '../Tab/Tab';

function Banner() {
  return (
    <>
    <div className='bg' style={{ backgroundImage: `url("../image/mainimage.jpg ")`,height:"400px"}}>
    <div className='container'>
        <div className='row'>
           <Tab/>
        </div>
    </div>
    </div>
    </>
  )
}

export default Banner