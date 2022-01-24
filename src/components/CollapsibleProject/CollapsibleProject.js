import React, {useState} from "react";
import "./CollapsibleProject.css";

function CollapsibleProject() {
const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapsible">
            <button className="toggle-project" onClick={() => setIsOpen(!isOpen)}>Toggle</button>
            {isOpen && <div className="content">
                Some content
            </div>}
        </div>
    )
}




export default CollapsibleProject;