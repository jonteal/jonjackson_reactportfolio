import { useContext } from "react";
import Intro from "./components/Intro";
import About from "./components/About/about.js";
import ProjectList from "./components/ProjectList/projectList.js";
import Contact from "./components/Contact/contact.js";
import Toggle from "./components/Toggle/toggle.js";
import { ThemeContext } from "./context";

const App = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div style={{ backgroundColor:darkMode ? "#222" : "white", 
        color: darkMode && "white" }}>
            <Toggle/>
            <Intro/>
            <About/>
            <ProjectList/>
            <Contact/>
        </div>
    )
}

export default App;