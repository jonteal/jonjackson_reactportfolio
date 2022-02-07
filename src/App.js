import { useContext } from "react";
import { ThemeContext } from "./context";
import PortfolioContainer from "./components/PortfolioContainer.js";
// import particlesJS from "../"


const App = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    // particlesJS.load('particles-js', 'assets/particles.json', function() {
    // console.log('callback - particles.js config loaded');
    // });

    // Renders the PortfolioContainer which internally handes the currentPage functionality and displays the respective data
    return (
        <div style={{ backgroundColor:darkMode ? "#222" : "white", 
        color: darkMode && "white" }}>
            <PortfolioContainer/>
        </div>
    )
}

// Exports the App
export default App;