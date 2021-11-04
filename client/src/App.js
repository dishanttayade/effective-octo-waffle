import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import Dashboard from './Authentication/Dashboard';


function App(){
    return (
        <Router>
            <Link to='/register'> Register </Link>
            <Link to='/login'> Login </Link>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />

        </Router>
    )
}


export default App;