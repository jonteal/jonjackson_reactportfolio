import "./Project.css";

const Project = ({img, link, live, description}) => {
    return (
        <div className="project">
            
            <div className="project-browser">
                <a className="project-link" href={link} target="_blank" rel="noreferrer">Github</a>
                <a className="project-link" href={live} target="_blank" rel="noreferrer">Try it!</a>
            </div>

            <a href={link} target="_blank" rel="noreferrer" className="link-left">
                <img src={img} alt="" className="project-img"/>
            </a>
            
            {/* <p>{description}</p> */}
            
        </div>
    )
}

export default Project;