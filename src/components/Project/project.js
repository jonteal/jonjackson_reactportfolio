import "./Project.css";
import React from "react";

// Project component
const Project = ({img, link, live, title, description}) => {
    // const [isOpen, setIsOpen] = useState(false);

    // const parentRef = useRef();


    return (
        <div className="project fade">
                <a href={live}>
                    <div className="img-wrapper">

                    <img src={img} alt="Selected project" className="zoom blur"/>
                    {/* <div className="content fade">
                        {description}
                    </div> */}
                    </div>
                </a>   
                <div className="project-info">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <div className="linkContainer">
                        <a className="link" href={link}>Github</a>
                        <a className="link" href={live}>Live</a>
                    </div>
                    

                    
                </div>
                
        </div>

        
    )
}

// Export the Project component
export default Project;