import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
const Layout = ({children}) =>(
    <div>
        <Navbar/>
        <Banner/>
        
        <div className="container">
        {children}
        </div>
        
    </div>

)
export default Layout;
