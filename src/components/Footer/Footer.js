import './Footer.css';
import LinkedInIcon from '../../Images/white-linkedin-logo.png';
import GithubIcon from '../../Images/white-github-logo.png';
import TwitterIcon from '../../Images/twitter-white-logo.png';
// import Youtube from '../../media/youtube.png';


export const Footer = () => {
    return (
        <div className="footer">
            <div className="social-icons">
                <a href="https://github.com/jonteal" target="_blank" rel="noreferrer">
                    <img src={GithubIcon} alt="Github Icon" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/jonathanjackson25/" target="_blank" rel="noreferrer">
                    <img src={LinkedInIcon} alt="LinkedIn Icon" className="social-icon" />
                </a>
                <a href="https://twitter.com/devjonjackson" target="_blank" rel="noreferrer">
                    <img src={TwitterIcon} alt="Twitter Icon" className="social-icon" />
                </a>
                {/* <a href="https://www.youtube.com/channel/UCFj06f9ol1b55YGUuLwSU_Q" target="_blank">
                    <img src={Youtube} alt="Youtube Icon" className="footImg imgBorder" />
                </a> */}
            </div>

        </div>
    )
};


export default Footer;