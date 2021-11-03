import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Register from './Authentication/Register';
import Login from './Authentication/Login';


function App(){
    return (
        <Router>
            <Link to='/register'> Register </Link>
            <Link to='/login'> Login </Link>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />

        </Router>
    )
}


export default App;