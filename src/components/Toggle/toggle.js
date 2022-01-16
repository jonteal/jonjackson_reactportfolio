import "./toggle.css";
import Sun from "../../Images/sun.png";
import Moon from "../../Images/moon.png";

const Toggle = () => {
    return (
        <div className="toggle">
            <img src={Sun} alt="" className="toggle-icon" />
            <img src={Moon} alt="" className="toggle-icon" />
            <div className="toggle-button"></div>
        </div>
    )
}

export default Toggle;