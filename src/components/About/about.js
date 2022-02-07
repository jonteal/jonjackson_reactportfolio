import "./About.css";
import MontanaPic from "../../Images/me.jpeg";

// About component
const About = () => {
    return (
        <div className="about" id="about-section">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img 
                    src={MontanaPic} 
                    alt="Me in Montana" 
                    className="about-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                    I am a junior full stack developer, but beyond that I have a passion for 
                    creating music, reading a good fiction book, and spending time outdoors 
                    with my wonderful family! 
                </p>
                <p className="about-desc">
                    I graduated the University of Arkansas Walton College of Business with a 
                    Bachelor's in Marketing and Business Administration. Before transitioning into 
                    business, I had a large focus on Anthropology and French as well. Other 
                    than my college education and graduating the University of Denver coding bootcamp, 
                    I spent a few years as a music producer/performer - writing music and playing 
                    saxophone around the country. Life is a beautiful journey and you never know what's in store!
                </p>
            </div>
        </div>
    )
}

// Exporting the About component
export default About;