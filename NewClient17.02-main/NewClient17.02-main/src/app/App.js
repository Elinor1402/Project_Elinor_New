import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar } from '../containers'
import {UsersRegister,Login,UsersList,UsersUpdate,FileUpload} from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css'
import PrivateRoute from '../containers/PrivateRoute';

export default function  App () {
    return (  
        <Router>
            <NavBar />
            <div className="content">
            <Switch>     
                <Route path="/login"exact component={Login}/>
                <PrivateRoute path="/register"exact component={UsersRegister}/>
                <PrivateRoute path="/users/list" exact component={UsersList} /> 
                <PrivateRoute path="/users/update/:id"exact component={UsersUpdate}/>
                <PrivateRoute path="/uploadFiles"exact component={FileUpload}/>
            </Switch>
            </div>
        </Router>  
        )
}
