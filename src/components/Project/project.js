import "./Project.css";
import React, {useState, useRef} from "react";

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
                        <div onClick={() => setIsOpen(!isOpen)} className="content">
                            {description}
                        </div>
                </div>
            
                <div className="project-browser">
                    <a className="project-link" href={link} target="_blank" rel="noreferrer">Github</a>

                    <a className="project-link" href={live} target="_blank" rel="noreferrer">Try it!</a>
                </div>

        
            <img onClick={() => setIsOpen(!isOpen)} src={img} alt="" className="project-img"/>
        

                        
        </div>
    )
}

export default Project;