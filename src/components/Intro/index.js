import "./style.css";

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">left</div>
                <div className="intro-left-wrapper">
                    <h2 className="intro-tag">Hello, My name is</h2>
                    <h2 className="intro-name">Jon Jackson</h2>
                </div>
            <div className="intro-right">right</div>
        </div>
    )
}

export default Intro