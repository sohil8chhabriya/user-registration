import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
    render(){
        return(
            <div>
                <h1>Sohil Sample React App</h1>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2 className="App-title">Welcome to React</h2>
                </header>
            </div>
        );
    }
}

export default Header;