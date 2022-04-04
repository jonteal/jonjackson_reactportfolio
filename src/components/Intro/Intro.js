import "./Intro.css";

// Intro/Homepage component
const Intro = () => {
    return (
        <div className="intro" id="home-section">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-tag">hello, my name is</h2>
                    <h1 className="intro-name">Jon Jackson</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">

                            {/* Scrolling text */}
                            <div className='intro-title-item'>Web Developer</div>
                            <div className='intro-title-item'>Music Producer</div>
                            <div className='intro-title-item'>Content Creator</div>
                        </div>
                    </div>
                    <p className="intro-desc">
                        I am a graduate of the University of Denver bootcamp for 
                        Full Stack Web Development! I love creating, problem-solving,
                        collaborating, designing, and most of all - learning! 
                    </p>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
                {/* <img src={Me} alt="" className="intro-img" /> */}
            </div>
        </div>
    )
}

// Exporting the Intro component
export default Intro;