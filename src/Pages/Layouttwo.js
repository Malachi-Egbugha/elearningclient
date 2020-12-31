import Navbar1 from '../Components/Navbar1';
import Sidebar from '../Components/Sidebar';
import './Layouttwo.css';


const Layouttwo = ({children}) => 
{

return(
    <div className="contain">
        <Navbar1  />
        <main>
           {children}
        </main>
        <Sidebar/>
        
       
       
   
    </div>

)
}
export default Layouttwo;



