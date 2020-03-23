import React from 'react';
import { Redirect } from 'react-router-dom';

import './Login.css';

const Login = ({ isLoggedIn, onLogin, onLoginChange, onPassChange }) => {
    if (isLoggedIn) {
        return <Redirect to="/profile"/>;
    }

    return (
        <div className="Login">
            <form className="login-form" onSubmit={onLogin}>
                <div className="login-title">You must be logged in to see this page</div>
                <input type="text" placeholder="Username" id="textInput" onChange={ onLoginChange }/>
                <input type="text" placeholder="Password" id="textInput2" onChange={ onPassChange }/>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            
        </div>
    )
}

export default Login