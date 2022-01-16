import "./project.css"

const Project = ({img, link, github}) => {
    return (
        <div className="project">
            <div className="project-browser">
                <div className="project-circle"></div>
                <div className="project-circle"></div>
                <div className="project-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer" className="link-left">
                <img src={img} alt="" className="project-img"/>
                Try it!
            </a>
            <div className="link-container">

                <a href={github} target="_blank" rel="noreferrer" className="link-right">
                    Github
                </a>
            </div>
        </div>
    )
}

export default Project;