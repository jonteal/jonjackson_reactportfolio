import "./projectList.css";
import Project from "../Project/project";

const ProjectList = () => {
    return (
        <div className="project-list">
            <div className="project-list-texts">
                <h1 className="project-list-title">My Projects!</h1>
                <p className="project-list-desc">
                    Welcome to my portfolio of work! I love building projects and challenging my
                    current understanding but I am always humbled to remember that there is always
                    something new to learn or improve upon. 
                </p>
            </div>
            <div className="project-list-list">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}

export default ProjectList;