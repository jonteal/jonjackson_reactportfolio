import Intro from "./components/Intro";
import About from "./components/About/about.js";
import ProjectList from "./components/ProjectList/projectList";

const App = () => {
    return (
        <div>
            <Intro/>
            <About/>
            <ProjectList/>
        </div>
    )
}

export default App;