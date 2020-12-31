import React from 'react';
import {Link, withRouter} from 'react-router-dom';




 const Navbar1=({history})=>{
    const toggleSidebar = async () =>
    {
        //define central store nd access redux
        var sidebar = document.getElementById("sidebar");
        sidebar.classList.add("sidebar_responsive");

    
    }
    return(
    <nav className="navbar">
    <div className="nav_icon" onClick={toggleSidebar}>
        <i className="fa fa-bars"></i>
    </div>
    <div className="navbar__left">
        <Link to="/">HOME</Link>
        <Link className="active_link" to="\dashboard">DASHBOARD</Link>
    </div>
    <div className="navbar__right">

        <Link to="#">
            <i className="fa fa-search"></i>
        </Link>
        <Link to="#">
            <i className="fa fa-clock-o"></i>
        </Link>
        <Link to="#">
            <img width="30"  src="assets/necco.png" alt=""/>
        </Link>
    </div>

</nav>
     

 )
}

 export default withRouter(Navbar1);













