import React, { useState } from 'react';
import "./Navbar.css";


function Navbar({ currentPage, handlePageChange }) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <nav className="navbar-items">
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
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
                            href= { '#resume' }
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

export default Navbar