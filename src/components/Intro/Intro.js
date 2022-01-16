import "./Intro.css";

const Intro = () => {
    return (
        <div className="intro" id="home-section">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-tag">Hello, My name is</h2>
                    <h1 className="intro-name">Jon Jackson</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className='intro-title-item'>Web Developer</div>
                            <div className='intro-title-item'>UI/UX Designer</div>
                            <div className='intro-title-item'>Music Producer</div>
                            <div className='intro-title-item'>Content Creator</div>
                        </div>
                    </div>
                    <p className="intro-desc">
                        I am a recent graduate of the University of Denver bootcamp for 
                        Full Stack Development! I design and develop modern
                        websites with stylish UI and am always seeking the next level of 
                        my potential. 
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

export default Intro;