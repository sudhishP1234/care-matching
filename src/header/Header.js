import React from 'react'
// import '../App.css';

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Navbar scroll</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{marginLeft:"500px",fontWeight:"700",gap:"20px"}}>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">ABOUT US</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">HOW IT WORK</a>
          </li>
          <li className="nav-item dropdown">
            <a className='nav-link' href='/'>
              HELP
            </a>
          </li>
        </ul>
        <form >
        <button type="button" className="btn btn-secondary" style={{margin:"20px",backgroundColor:"black"}}>LOG IN</button>
        <button type="button" className="btn btn-secondary" style={{margin:"20px",backgroundColor:"black"}}>REGISTER</button>
        </form>
      </div>
    </div>
  </nav>
  </>
   )
}

export default Header


















































//     <div classNameName='.container-fluid'>
//     <div classNameName='parrent'>
//     <ul className="nav justify-content-center">
//   <li classNameName="nav-item">
//     <a classNameName="nav-link active" aria-current="page" href="/">ABOUT US</a>
//   </li>
//   <li classNameName="nav-item">
//     <a className="nav-link" href="/">HOW IT WORK</a>
//   </li>
//   <li classNameName="nav-item">
//     <a classNameName="nav-link" href="/">HELP</a>
//   </li>
// </ul>
//  <div classNameName="d-grid gap-2 d-md-flex justify-content-md-end">
//  {/* <button classNameName="btn btn-primary me-md-2" type="button">LOG IN</button> */}
//  <button type="button" className="btn btn-secondary">LOG IN</button>
//  <button type="button" className="btn btn-secondary">REGISTER</button>
//  {/* <button classNameName="btn btn-primary" type="button">REGISTER</button> */}
// </div>
//     </div>   
//     </div>
 