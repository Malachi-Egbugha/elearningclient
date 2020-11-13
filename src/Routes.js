import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Dashboard from './Pages/Dashboard';


const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>        
                <Route path="/signin" exact component={Signin}/>
                <Route path="/dashboard" exact component={Dashboard}/>
                
            </Switch>
        </BrowserRouter>
    );

};
export default Routes;