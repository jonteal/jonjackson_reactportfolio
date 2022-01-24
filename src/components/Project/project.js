import "./Project.css";
import React, {useState} from "react";

const Project = ({img, link, live, description}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="project">
            
            <button className="description-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                <div className="project-browser">
                    <a className="project-link" href={link} target="_blank" rel="noreferrer">Github</a>
                    <p className="project-link-description" href={description}>
                        {isOpen && <div className="content">
                            {description} 
                        </div>}
                        
                    </p>
                    <a className="project-link" href={live} target="_blank" rel="noreferrer">Try it!</a>
                </div>
            </button>

            <a href={link} target="_blank" rel="noreferrer" className="link-left">
                <img src={img} alt="" className="project-img"/>
            </a>

            <div className="project-description">
                <p>{description}</p>
            </div>
                        
        </div>
    )
}

export default Project;