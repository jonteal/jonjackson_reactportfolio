import Intro from "./components/Intro";
import About from "./components/About/about.js";
import ProjectList from "./components/ProjectList/projectList.js";
import Contact from "./components/Contact/contact.js";
import Toggle from "./components/Toggle/toggle.js";

const App = () => {
    return (
        <div>
            <Toggle/>
            <Intro/>
            <About/>
            <ProjectList/>
            <Contact/>
        </div>
    )
}

export default App;