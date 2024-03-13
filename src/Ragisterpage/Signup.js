import React from 'react'
import '../Ragisterpage/sign.css'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import Navfooter from '../Footericon/Navfooter'

function Signup() {
  return (
    <>
    <Header/>
    <div className='container' id='ctn'>
        <div className="shadow p-4 mb-5 bg-body rounded" id='mgn'>
        <form  className='frm'>
  <div className="form-group">
    {/* <div className="form-group" id="ipt"> */}
    <label for="exampleInputEmail1">Where do you need care</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter postcode"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <i className="fa fa-map-marker" style={{fontSize:"20px",float:"right",marginTop:"-28px",marginRight:"14px"}}></i>
    
  
    {/* <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your ZIP code" />
    <span>
              <i class="fa fa-map-marker" style={{fontSize:"30px"}}></i>
              </span> */}
   
  </div>
  <div className="form-group">
    <label for="exampleEmailAddress">Email Address</label>
    <input type="email" className="form-control"  placeholder="Enter your email address"/>
  </div>
  <div className="form-group">
    <label for="exampleInputFirstName">First Name</label>
    <input type="text" className="form-control" id="exampleInputFirstName" placeholder="Enter your first name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputLastName">Last Name</label>
    <input type="text" className="form-control" id="exampleInputLastName" placeholder="Enter your last name"/>
  </div>
  <div className="form-group">
  <label for="Birtday">Date Of Birtday</label>
      <input type="date" className="form-control" id="Birtday" value="Birtday"/>
  </div>
  
  <div className="form-group">
  <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" className="form-control"  placeholder="Enter your phone number:" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
  </div>

  <div className="form-group">
  <label for="password">Password</label>
      <input type="password" className="form-control"/>
  </div>
  
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">I agree to Website T&C</label>
  </div>
 <Link to={`/Jobcard`}> <button type="Ragister" className="btn btn-primary" id='btn2'>Ragister</button></Link>
  <p>Already have an account ? <a href='/' style={{textDecoration:"none"}}>Log in</a></p>
</form>
        </div>
    </div>
    <Navfooter/>

    </>
  )
}

export default Signup