import "./Project.css";
import React from "react";

// Project component
const Project = ({img, link, live, projectTitle, description}) => {
    // const [isOpen, setIsOpen] = useState(false);

    // const parentRef = useRef();


    return (
        <div className="project fade">
                <div className="img-wrapper">

                    <img src={img} alt="Selected project" className="zoom blur"/>
                    {/* <div className="content fade">
                        {description}
                    </div> */}
                </div>   
                
                <p className="project-name">{projectTitle}</p>
                
        </div>
    )
}

// Export the Project component
export default Project;