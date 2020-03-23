import React, { Component } from 'react'
import Home from '../Home/Home'; 
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import News from '../News/News';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'

export default class App extends Component {

    state = {
        isLoggedIn: false,
        login: '',
        pass: ''
    };

    onLogin = (e) => {
        e.preventDefault();
        if (this.state.login === 'admin' && this.state.pass === '12345') {
            this.setState({
                isLoggedIn: true
            })
        } else {
            if (document.getElementById("error")) {
                document.getElementById("error").remove();
                document.getElementById("textInput2").insertAdjacentHTML('afterend', '<p id="error">The username or password you entered is incorrect</p>');
                
            } else {
                document.getElementById("textInput2").insertAdjacentHTML('afterend', '<p id="error">The username or password you entered is incorrect</p>');
            }
            
        };
        document.getElementById("textInput").value = "";
        document.getElementById("textInput2").value = "";
        
    }
    onLoginChange = (e) => {
        this.setState({
            login: e.target.value
        })
    }
        

    onPassChange = (e) => {
        this.setState({
            pass: e.target.value
        })
    }


    render () {

        const { isLoggedIn } = this.state;

        return(
            <Router>
                <div>
                    <Header />
                    
                    <Route path="/" component={Home} exact />
                    <Route path="/news" component={News} />
                    <Route path="/profile"
                     render={()=> (
                        <Profile isLoggedIn={isLoggedIn}/>
                     )} />
                    <Route path="/login"
                     render={()=> (
                        <Login 
                        isLoggedIn={isLoggedIn}
                        onLogin={this.onLogin}
                        onPassChange={this.onPassChange}
                        onLoginChange={this.onLoginChange}/>
                    )} />
                    <Footer />
                </div>
            </Router>
              
        );
    };
}

