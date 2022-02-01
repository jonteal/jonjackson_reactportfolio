import { useContext } from "react";
import Intro from "./components/Intro/Intro.js";
import About from "./components/About/About.js";
import ProjectList from "./components/ProjectList/ProjectList.js";
import Contact from "./components/Contact/Contact.js";
import Toggle from "./components/Toggle/Toggle.js";
import { ThemeContext } from "./context";
import Navbar from "./components/Navbar/Navbar.js";
import PortfolioContainer from "./components/PortfolioContainer.js";
// import particlesJS from "../"


const App = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    // particlesJS.load('particles-js', 'assets/particles.json', function() {
    // console.log('callback - particles.js config loaded');
    // });

    return (
        <div style={{ backgroundColor:darkMode ? "#222" : "white", 
        color: darkMode && "white" }}>
            {/* <Toggle/>
            <Navbar/> */}
            <PortfolioContainer/>
            {/* <Intro/>
            <About/>
            <ProjectList/>
            <Contact/> */}
        </div>
    )
}

export default App;