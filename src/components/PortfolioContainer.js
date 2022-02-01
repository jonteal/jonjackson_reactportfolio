import React, { useState } from 'react';
// import NavTabs from './NavTabs';
import About from './About/About';
import ProjectList from './ProjectList/ProjectList';
import Contact from './Contact/Contact';
import Intro from './Intro/Intro';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Toggle from './Toggle/Toggle';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Intro />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <ProjectList />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Toggle/>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer/>
        </div>
    );
}

