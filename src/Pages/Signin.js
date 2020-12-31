import {useState} from 'react';
import Navbar from '../Components/Navbar';
import {Redirect} from 'react-router-dom';
import './Signin.css';
import {signin, authenticate} from '../auth';

const Signin =()=>
{

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false
    });
    const {email, password,error,loading, redirectToReferrer} = values;
    // handle change in input
    const handleChange = name => event =>{
        setValues({...values, error: false, [name]: event.target.value});

    };
    //handle submission of form
    const clickSubmit = async (event) =>{
      event.preventDefault();
      setValues({...values, error: false, loading: true});
      let signdata =await  signin({email,password});
        if(signdata.error){
          setValues({...values, error:signdata.error,loading: false});
      }else{
          authenticate(signdata, () => {
              setValues({...values,redirectToReferrer: true});
          });
      }
      
      
  };
  //handle signup form
  const signinform = () =>(
    <form >
  <div className="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="email" name="username" onChange={handleChange('email')} className="form-control"  placeholder="Enter Email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="pass" onChange={handleChange('password')} className="form-control"  placeholder="Password"/>
  </div>
  {showLoading()}
  
  <button onClick={clickSubmit} type="submit" name="submit"  class="btn btn-danger">Login</button>
</form>
 
  );
  //show loading
  const showLoading = () =>(
    loading && (
    <div className="spinner">
        <div></div>
        <div></div>

    
      </div>
      )
  );
  // redirect user to dashboard if referer is true
  const redirectUser = () =>{
    if(redirectToReferrer){
        return <Redirect to="/dashboard"/>
    }
};
//error div
const showError = () => (
  <div className="alert alert-danger" style={{display: error ? '': 'none'}}>
       {error}
    
  </div>
  );
  

return (


    <div>
    <Navbar/>
    <div className="loginbanner">
       
    <div className="card">
  <div className="card-header">Login</div>
  <div className="card-body">
  
  {showError()}
  {redirectUser()}
  {signinform()}
</div>
  </div>
    </div>
    </div>

)
}
export default Signin;