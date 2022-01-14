import "./project.css"


const Project = (props) => {
    return (
        <div className="project">
            <div className="project-browser">
                <div className="project-circle"></div>
                <div className="project-circle"></div>
                <div className="project-circle"></div>
            </div>
            {props.projects.map(projects => (
                <a key={projects.id} href={projects.link} target="_blank" rel="noreferrer">
                    <img src={projects.img} alt="" className="project-img"/>
                </a>
            ))}

        </div>
    )
}

export default Project