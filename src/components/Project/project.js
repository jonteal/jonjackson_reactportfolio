import "./Project.css";
import React from "react";

// Project component
const Project = ({img, link, live, title, description, tools}) => {
    // const [isOpen, setIsOpen] = useState(false);

    // const parentRef = useRef();


    return (
        <div className="project fade">
                <div className="linkContainer">
                        <a className="link" href={link} target="_blank" rel="noreferrer">Github</a>
                        <a className="link" href={live} target="_blank" rel="noreferrer">Try it!</a>
                </div>
                <a href={live} target="_blank" rel="noreferrer">
                    <div className="img-wrapper">
                        <img src={img} alt="Selected project" className="zoom blur"/>
                    </div>
                </a>  
                <div className="project-info">
                    <p class="card-text">{description}</p>
                </div>
        </div>

        
    )
}

// Export the Project component
export default Project;