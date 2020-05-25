import React, {Component} from 'react';
import './App.css';
import Nav from "./Nav";

class App extends Component {
    constructor() {
        super();
        this.state = {
            toggleMenu: false
        }
    }
openCloseMenu (){
        this.setState({
            toggleMenu: !this.state.toggleMenu
        })
    }

    render() {
        return (
            <div className="App">
                <header>
                    <div className="logo">
                        <img alt="Logo"
                             src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"/>
                    </div>
                    <div className="nav-desktop">
                        <ul>
                            <a className="nav-link" href="#">SERVICES </a>
                            <a className="nav-link" href="#">PORTFOLIO </a>
                            <a className="nav-link" href="#">ABOUT </a>
                            <a className="nav-link" href="#">TEAM </a>
                            <a className="nav-link" href="#">CONTACT </a>
                        </ul>
                    </div>
                    <div className={this.state.toggleMenu ? "nav-mobile open" : "nav-mobile closed"}>
                        <button className='menu-button' onClick={(e) => this.openCloseMenu()}>MENU <i className="fa fa-bars" aria-hidden="true"></i></button>
                        <div id="mobileMenu">
                            <ul>
                                <a className="nav-link" href="#">SERVICES </a>
                                <a className="nav-link" href="#">PORTFOLIO </a>
                                <a className="nav-link" href="#">ABOUT </a>
                                <a className="nav-link" href="#">TEAM </a>
                                <a className="nav-link" href="#">CONTACT </a>
                            </ul>
                        </div>
                    </div>
                </header>
                <div className="hero-text">
                    <h1><span>Welcome To Our Studio!</span><br/> IT'S NICE TO MEET YOU</h1>
                    <button className="tell-me-more">TELL ME MORE</button>
                </div>
            </div>
        );
    }


}

export default App;
