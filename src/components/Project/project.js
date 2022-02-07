import "./Project.css";
import React, {useState, useRef} from "react";

// Project component
const Project = ({img, link, live, title, description}) => {
    const [isOpen, setIsOpen] = useState(false);

    const parentRef = useRef();


    return (
        <div className="project">
                <div className="content-parent" ref={parentRef} 
                    style={
                        isOpen ? {
                            height: parentRef.current.scrollHeight + "px",
                        }
                        : {
                            height: "0px",
                        }
                    }>
                        {/* Project Description */}
                        <div onClick={() => setIsOpen(!isOpen)} className="content">
                            {description}
                        </div>
                </div>
            
            {/* Github and Try it links on each project */}
                <div className="project-browser">
                    <a className="project-link" href={link} target="_blank" rel="noreferrer">Github</a>

                    <a className="project-link" href={live} target="_blank" rel="noreferrer">Try it!</a>
                </div>

        
            <img onClick={() => setIsOpen(!isOpen)} src={img} alt="Selected project" className="project-img"/>
        
        </div>
    )
}

// Export the Project component
export default Project;