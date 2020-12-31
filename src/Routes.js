import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Dashboard from './Pages/Dashboard';
import Checkresult from './Pages/Checkresult';
import PrivateRoute from './auth/Privateroute';

const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>        
                <Route path="/signin" exact component={Signin}/>
                <PrivateRoute path="/dashboard" exact component={Dashboard}/>
                <PrivateRoute path="/checkresult" exact component={Checkresult}/>
                <PrivateRoute path="/notice" exact component={Dashboard}/>
                <PrivateRoute path="/fee" exact component={Dashboard}/>
                <PrivateRoute path="/profile" exact component={Dashboard}/>
                
            </Switch>
        </BrowserRouter>
    );

};
export default Routes;
