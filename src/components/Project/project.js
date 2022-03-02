import "./Project.css";
import React from "react";

// Project component
const Project = ({img, link, live, title, description, tools}) => {
    // const [isOpen, setIsOpen] = useState(false);

    // const parentRef = useRef();


    return (
        <div className="project fade">
                <div className="linkContainer">
                        <a className="link" href={link}>Github</a>
                        <a className="link" href={live}>Try it!</a>
                </div>
                <a href={live}>
                    <div className="img-wrapper">
                        <img src={img} alt="Selected project" className="zoom blur"/>
                    </div>
                </a>  
                {/* <div className="project-title">
                    {title}
                </div>  */}
                <div className="project-info">
                    <p class="card-text">{description}</p>
                </div>
                {/* <div className="project-info">
                    <p className="tools">{tools}</p>
                </div>
                 */}
        </div>

        
    )
}

// Export the Project component
export default Project;