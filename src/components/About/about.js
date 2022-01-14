import "./about.css";
import MontanaPic from "../../Images/me.jpeg";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img 
                    src={MontanaPic} 
                    alt="" 
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
                    business though, I had a large focus on Anthropology and French as well. Other 
                    than my college education and my graduating the University of Denver coding bootcamp, 
                    I spent a few years as a music producer and performer writing music and playing 
                    saxophone. Life is a beautiful journey!
                </p>
            </div>
        </div>
    )
}

export default About