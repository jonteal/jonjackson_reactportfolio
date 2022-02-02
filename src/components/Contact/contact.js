import "./Contact.css";
import Phone from "../../Images/phone.png";
import Email from "../../Images/email.png";
import Address from "../../Images/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(

        'service_my20arp', 
        'template_j7zva5b', 
        formRef.current, 
        'user_gA8QSmOG7ld5EfHWWmsof'
        )

        .then((result) => {
            console.log(result.text);
            setDone(true);
            formRef.current.reset();

        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="contact" id="contact-me-section">
            <div className="contact-bg"></div>
            <div  className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Contact me!</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="contact-icon"
                            />
                            +1 (479) 601-3157
                        </div>
                        <div className="contact-info-item">
                            <img
                                src={Email}
                                alt=""
                                className="contact-icon"
                            />
                            jonjackson.webdesign@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <img
                                src={Address}
                                alt=""
                                className="contact-icon"
                            />
                            Fayetteville, AR
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <b>How can I help?</b> Reach out to me if you would like to chat about 
                        your team or project. I look forward to hearing from you!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you for your message!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;