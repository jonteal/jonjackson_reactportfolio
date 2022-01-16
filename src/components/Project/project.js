import "./Project.css";

const Project = ({img, link}) => {
    return (
        <div className="project">
            <div className="project-browser">
                <div className="project-circle"></div>
                <div className="project-circle"></div>
                <div className="project-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer" className="link-left">
                <img src={img} alt="" className="project-img"/>
            </a>
            <div className="link-container">
            </div>
        </div>
    )
}

export default Project;