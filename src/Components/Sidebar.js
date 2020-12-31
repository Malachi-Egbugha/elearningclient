import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {isActive,signout} from '../auth';
import passport from '../images/passport.jpeg';

const Sidebar = ({history})=> 
{
    const closeSidebar = async () =>
    {
        //define central store nd access redux
        var sidebar = document.getElementById("sidebar");
        sidebar.classList.remove("sidebar_responsive");
    
    
    }
return(
    
<div id="sidebar">
<div className="sidebar__title" >
    <div className="sidebar__img">
        
        
    </div>
    <i className="fa fa-times" id="sidebarIcon" onClick={closeSidebar}></i>
</div>
    <div style={{display: "flex", justifyContent: "center"}}>
    <img style={{width: "100px", borderRadius: "50%"}} src={passport} alt=""/>
    </div>

<div className="sidebar__menu">
<div className= {isActive(history, '/dashboard')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-home"></i>
    <Link to="/dashboard">Dashboard</Link>
</div>
<h2>ACCOUNT</h2>
<div className={isActive(history, '/profile')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-archive"></i>
    <Link to="/profile">Profile</Link>
</div>
<div className={isActive(history, '/fee')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-handshake-o"></i>
    <Link to="/fee">Fees and Receipt</Link>
</div>

<h2>NOTICE BOARD</h2>
<div className={isActive(history, '/notice')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="/notice">Check Notice board</Link>
</div>

<h2>RESULT</h2>
<div className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="/checkresult">Check Result</Link>
</div>
<div className="sidebar__logout">
    
    <span className="nav-link " onClick={() => signout(() =>{
           history.push('/')
         })} style={{cursor: 'pointer', color: 'red'}}>
             <i className="fa fa-power-off"></i>
             Log out
             </span>
</div>


</div>
</div>
)
        }
export default withRouter(Sidebar);