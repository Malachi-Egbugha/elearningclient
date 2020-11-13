import React from 'react';
import {Link} from 'react-router-dom'
 const Navbar=()=>(
     
<nav className="navbar navbar-expand-xl navbar-dark" style={{backgroundColor: "#5D5753", fontSize: "1rem", color: "#fff",cursor: "pointer",fontFamily: "font-family: 'Cormorant Garamond', serif;" }}>
        
<div class="navbar-header">
      <Link class="navbar-brand" to="/">WebSiteName</Link>
    </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/" style={{color: "#fff", backgroundColor: "rgba(0, 0, 0,0.3)"}}>Home</Link>
      </li>
       <li className="nav-item ">
        <Link className="nav-link " to="/signin" style={{color: "#fff"}}>
          Signin
        </Link>
      </li> 
      <li className="nav-item ">
        <Link className="nav-link " to="/signout" style={{color: "#fff"}}>
          Signout
        </Link>
      </li> 
    </ul>

   
   
 
  </div>
</nav>
 )

 export default Navbar;