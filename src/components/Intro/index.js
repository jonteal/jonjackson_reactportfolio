import "./style.css";

const Intro = () => {
    return (
        <div className="intro">
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
                </div>
            </div>
            <div className="intro-right">right</div>
        </div>
    )
}

export default Intro