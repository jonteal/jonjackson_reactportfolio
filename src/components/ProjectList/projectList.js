import "./ProjectList.css";
import Project from "../Project/Project.js";
import { projects } from "../../data";

// ProjectList component
const ProjectList = () => {
    return (
        <div className="project-list" id="project-section">
            <div className="project-list-texts">
                <h1 className="project-list-title">My Projects</h1>
                <p className="project-list-desc">
                    Welcome to my portfolio of work! I love building projects and challenging my
                    current understanding but I am always humbled to remember that there is an endless 
                    list of things to learn and improve upon. 
                </p>
            </div>
            <div className="project-list-list">

                {/* Mapping over the projects in order to display them in the Project component instances */}
                {projects.map((item) => (
                    <Project key={item.id} img={item.img} link={item.link} live={item.live} description={item.description}/>
                ))}
            </div>
            <p className="coming-soon">More Coming Soon!</p>

        </div>

    )
}

// Exporting the ProjectList component
export default ProjectList;