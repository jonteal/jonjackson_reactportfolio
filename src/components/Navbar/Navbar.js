// import React, { Component } from "react";
import React from 'react';
import "./Navbar.css";
import Resume from "../../Images/jon-jackson-resume.pdf";

// import { MenuItems } from "./MenuItems";
// import GithubIcon from "../../Images/white-github-logo.png";
// import LinkedInIcon from  "../../Images/white-linkedin-logo.png";


function Navbar({ currentPage, handlePageChange }) {

    // const state = { clicked: false }

    const handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    return (
        <nav className="navbar-items">
                <h1 className='name'>
                    <span className='first-letter'>J</span>on <span className='first-letter'>J</span>ackson
                </h1>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
                <ul className='nav-menu'>
                    <li className="nav-item">
                        <a
                            href="#home"
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-links nav-link active currentLink' : 'nav-links nav-link'}
                        >
                        Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-links nav-link active currentLink' : 'nav-links nav-link'}
                        >
                        About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#projects"
                            onClick={() => handlePageChange('Projects')}
                            className={currentPage === 'Projects' ? 'nav-links nav-link active currentLink' : 'nav-links nav-link'}
                        >
                        Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-links nav-link active currentLink' : 'nav-links nav-link'}
                        >
                        Contact Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href= { Resume }
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-links nav-link active currentLink' : 'nav-links nav-link'}
                        >
                        Resume
                        </a>
                    </li>
                </ul>
        </nav>
    );
}


// class Navbar extends Component {

//     state = { clicked: false }

//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked })
//     }

//     render() {
//         return(
//         <nav className="navbar-items">
//             <div className="social-icons">
//                 <a href="https://github.com/jonteal" target="_blank" rel="noreferrer">
//                     <img 
//                         src={GithubIcon}
//                         alt=""
//                         className="social-icon"
//                     />
//                 </a>
//                 <a href="https://www.linkedin.com/in/jonathanjackson25/" target="_blank" rel="noreferrer">
//                     <img 
//                         src={LinkedInIcon}
//                         alt=""
//                         className="social-icon"
//                     />
//                 </a>
//             </div>
//             <div className="menu-icon" onClick={this.handleClick}>
//                 <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
//             </div>
//             <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//                 {MenuItems.map((item, index) => {
//                     return (
//                         <li key={index} className="nav-item">
//                             <a className={item.cName} href={item.url}>
//                                 {item.title}
//                             </a>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </nav>
//         )
//     }
// }

export default Navbar