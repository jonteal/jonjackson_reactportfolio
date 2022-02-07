import "./Toggle.css";
import Sun from "../../Images/sun.png";
import Moon from "../../Images/moon.png";
import { useContext } from "react";

// importing ThemeContext to be used below
import { ThemeContext } from "../../context";

const Toggle = () => {

    // const theme employs ThemeContext with useContext hook
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"});
    }
    
    return (
        <div className="toggle">
            <img src={Sun} alt="Sun icon" className="toggle-icon" />
            <img src={Moon} alt="Moon icon" className="toggle-icon" />
            <div className="toggle-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
}

// Export Toggle component
export default Toggle;