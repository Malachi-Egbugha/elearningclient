import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {isActive,isAuthenticated, signout} from '../auth'

 const Navbar=({history})=>(
     
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
        <Link className="nav-link" to="/" style={ isActive(history, '/') ? {color: "#fff", backgroundColor: "rgba(0, 0, 0,0.3)"}:{color: "#fff"} }>Home</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link " to="/dashboard" style={ isActive(history, '/dashboard') ? {color: "#fff", backgroundColor: "rgba(0, 0, 0,0.3)"}:{color: "#fff"} }>
          Dashboard
        </Link>
      </li> 
      {!isAuthenticated() && ( 
      <li className="nav-item ">
        <Link className="nav-link " to="/signin" style={ isActive(history, '/signin') ? {color: "#fff", backgroundColor: "rgba(0, 0, 0,0.3)"}:{color: "#fff"} }>
          Signin
        </Link>
      </li> 
      )}

      {isAuthenticated() && (
         <li className="nav-item ">
         <span className="nav-link " onClick={() => signout(() =>{
           history.push('/')
         })} style={{cursor: 'pointer', color: '#ffffff'}}>
           Signout
         </span>
       </li> 

      )}
      
     
    </ul>

   
   
 
  </div>
</nav>
 )

 export default withRouter(Navbar);