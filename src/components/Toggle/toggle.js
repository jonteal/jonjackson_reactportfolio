import "./Toggle.css";
import Sun from "../../Images/sun.png";
import Moon from "../../Images/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"});
    }
    
    return (
        <div className="toggle">
            <img src={Sun} alt="" className="toggle-icon" />
            <img src={Moon} alt="" className="toggle-icon" />
            <div className="toggle-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
}

export default Toggle;