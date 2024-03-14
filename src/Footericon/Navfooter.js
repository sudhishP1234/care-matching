import React from 'react'
// import { Link } from 'react-router-dom'
// import '../Footericon/Navfooter.css'
function Navfooter() {
  return (
    <div className='container' style={{backgroundColor:"#CECECE",height:"330px", marginTop:"70px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}>
    {/* <div className='col-sm-12'> */}
      <h2 style={{textAlign:"center",padding:"30px"}}>Your Logo</h2>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{display:"contents"}} >
    <strong>  <ul class="navbar-nav" style={{marginLeft:"370px"}}>
       <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">How it Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Help</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Privacy Policy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Terms & Conditions</a>
        </li> </ul></strong>

      <div style={{padding:"40px",margin:"8px"}}>
    <ul style={{listStyle:"none", display:"flex",flexWrap:"nowrap",justifyContent:"center"}}>
   <li> <a href='/'><i class="fa fa-facebook-f"style={{fontSize:"28px",padding:"11px",backgroundColor:"black",color:"white",borderRadius:"50%"}} ></i></a></li>
      <li> <a href='/'><i class="fa fa-instagram" style={{fontSize:"28px",marginLeft:"10px", padding:"11px",backgroundColor:"black",color:"white",borderRadius:"50%"}}></i></a></li>
   <li><a href='/'> <i class="fa fa-twitter" style={{fontSize:"28px",marginLeft:"10px",padding:"11px",backgroundColor:"black",color:"white",borderRadius:"50%"}}></i></a> </li>
     <li> <a href='/'><i class="fa fa-linkedin" style={{fontSize:"28px",marginLeft:"10px",padding:"11px",backgroundColor:"black",color:"white",borderRadius:"50%"}}></i></a></li>
    </ul>
    <p style={{textAlign:"center"}}> <i class="fa fa-copyright"></i> Copyright 2024 <strong>Website name </strong> All Right Reserved</p>

    </div>
</nav>
    </div>
    // </div>
  )
}

export default Navfooter










// import React from 'react'
// import { Link } from 'react-router-dom'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Footerlogo from '../Assets/image/Frontend/Footerlogo.png';
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { useState } from 'react';
// import { useEffect } from 'react';

// export default function Footer() {
//   const [footer, setFooter] = useState({ facebook: "/", instagram: "/", linkedin: "/", twitter: "/" })
//   const headers = {
//     Accept: "application/json, text/plain, */*",
//     "Content-Type": "application/json"
// };


// useEffect(() => {
//   axios.get(`/api/general-settings`, { headers }).then((response) => {
//     if (response.status === 200) {
//       setFooter({
//             facebook: response.data.setting.facebook,
//             instagram: response.data.setting.instagram,
//             linkedin: response.data.setting.linkedin,
//             twitter: response.data.setting.twitter
//         });
//     }
// })
// }, []);
//   return (
//     <div>
//       <div className="footer">
//         <Container>
//             <Row>
//             <Col className='text-center'>
//                 <Link to='/'><img src={Footerlogo} className='img-fluid' alt='Logo' /></Link>
//             </Col>
//             </Row>
//             <Row>
//             <Col className='text-center'>
//                 <div className='list-inline footermenu'>
//                     <Link to='/about-us'>Our vision </Link>
//                     <Link to='/how-it-work'>Operation </Link>
//                     {/* <Link to='/help'>Aide</Link> */}
//                     <a href='/blog'>Blog </a>
//                     <Link to='/privacy-policy'>Legal notices </Link>
//                     <Link to='/terms-and-conditions'>Data protection</Link>
//                 </div>
//             </Col>
//             </Row>
//             <Row>
//             <Col sm='12' xs='12'>
//                 <div className='socialmedia'>
//                     <a href={footer.facebook} target="_blank"><FaFacebookF/></a>
//                     <a href={footer.instagram} target="_blank"><FaInstagram/></a>
//                     <a href={footer.linkedin} target="_blank"><FaTwitter/></a>
//                     <a href={footer.twitter} target="_blank"><FaLinkedinIn/></a>
//                 </div>
//             </Col>
//             </Row>
//             <Row>
//             <Col sm='12' xs='12'>
//                 <div className='text-center bottomfooter'>
//                     <p>&copy; Copyright 2023 <Link to='/'>Yeliko</Link>  All rights reserved</p>
//                 </div>
//             </Col>
//             </Row>
//         </Container>
//       </div>
//     </div>
//   )
// }
