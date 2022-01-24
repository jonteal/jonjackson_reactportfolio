import { useContext } from "react";
import Intro from "./components/Intro/Intro.js";
import About from "./components/About/About.js";
import ProjectList from "./components/ProjectList/ProjectList.js";
import Contact from "./components/Contact/Contact.js";
import Toggle from "./components/Toggle/Toggle.js";
import { ThemeContext } from "./context";
import Navbar from "./components/Navbar/Navbar.js";
import CollapsibleProject from "./components/CollapsibleProject/CollapsibleProject";


const App = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div style={{ backgroundColor:darkMode ? "#222" : "white", 
        color: darkMode && "white" }}>
            <Toggle/>
            <Navbar/>
            <Intro/>
            <About/>
            <ProjectList/>
            {/* <CollapsibleProject/> */}
            <Contact/>
        </div>
    )
}

export default App;