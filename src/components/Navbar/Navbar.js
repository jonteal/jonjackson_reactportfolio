import React, { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import GithubIcon from "../../Images/white-github-logo.png";
import LinkedInIcon from  "../../Images/white-linkedin-logo.png";

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
        <nav className="navbar-items">
            <div className="social-icons">
                <a href="https://github.com/jonteal" target="_blank" rel="noreferrer">
                    <img 
                        src={GithubIcon}
                        alt=""
                        className="social-icon"
                    />
                </a>
                <a href="https://www.linkedin.com/in/jonathanjackson25/" target="_blank" rel="noreferrer">
                    <img 
                        src={LinkedInIcon}
                        alt=""
                        className="social-icon"
                    />
                </a>
            </div>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
        )
    }
}

export default Navbar