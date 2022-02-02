import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume" id="resume-section">
                
            <div className="resume-bg"></div>
            <h1 className="resume-title">Jon Jackson</h1>
            <h3 className="resume-subtitle">Software Engineer, Musician</h3>
            <div  className="resume-wrapper">

            <div className="resume-left">
                    <p className="resume-desc">
                        <h2>Bio</h2>
                        <p>
                            Full stack web developer with background in marketing and business with an ability to provide unique
                            perspectives on how end-users interact with websites and software platforms. Innovative
                            problem-solver who is passionate and reliable in individual and team-oriented settings.
                            Strengths in creativity, motivation, and building projects from ideation to execution.
                        </p>
                    </p>
                    <p className="resume-desc">
                        <h2>Education</h2>
                        <p><b>University of Denver </b>| Denver, CO | 2022</p>
                        <p>Full Stack Web Developer Bootcamp</p>
                        <p><b>University of Arkansas </b>| Fayetteville, AR | 2019</p>
                        <p> Bachelor of Science, Marketing</p>
                    </p>
                    <p className="resume-desc">
                        <h2>Work</h2>
                        <b>MRO, Inc.</b>
                        <p>Developed new business with 50+ accounts and boosted revenue by $580k in 2021.</p>
                        <b>Jonteal</b>
                        <p>Music producer and live performer</p>
                    </p>
                </div>
                
                <div className="resume-right">
                    <p className="resume-desc">
                        <h2>Stack</h2>
                        <b>Languages:</b>
                        <p>JavaScript ES6+, CSS3, HTML5, SQL (MySQL), NoSQL (MongoDB), Node.js, GraphQL</p>
                        <b>Libraries</b>
                        <p> ReactJS, Express, Node, jQuery, Bootstrap, Bulma, NextJS, Sequelize, Mongoose, Handlebars</p>
                        <b>Applications</b>
                        <p> GitHub, GitLab, Heroku, Compass, Atlas, Npm, Insomnia, Postman, MySQL Workbench</p>
                    </p>
                    
                    <p className="resume-desc">
                        <h2>Contact Info</h2>
                        <p>Download Resume</p>
                        <p>jonjackson.webdesign@gmail.com</p>
                        <p>+1-479-601-3157</p>
                        <p>jonjacksondev.com</p>
                        <p>@devjonjackson</p>
                    </p>
                </div>
            </div>
        </div>




    )
}

export default Resume;