import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const message = e.target.message.value;
        if(message.length < 6){
            alert("Tell us more . . .");
            e.target.reset();
            return;
        }
        
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then(() => {
            alert("Email successfully sent, thank you!");
        }, (error) => {
            alert(error.text);
        }); 

        e.target.reset();
    };

    return (
        <div className="Contact-Me" id="Contact-Me" style={{ color: "white" }}>
            <form ref={form} onSubmit={sendEmail} className="contact-form" >
                <h4>Email me <i className="far fa-envelope"></i></h4>
                <div className="form-row">
                    <label>Name :</label>
                    <input type="text" name="name" placeholder="Enter your full name . . ." required />
                </div>
                <div className="form-row">
                    <label>Email :</label>
                    <input type="text" name="email" placeholder="Enter your email . . ." required />
                </div>
                <div className="form-row">
                    <label>Subject :</label>
                    <input type="text" name="subject" placeholder="Enter the subject . . ." required />
                </div>
                <div className="form-row">
                    <label>Message :</label>
                    <textarea name="message" placeholder="Enter the message . . ." required />
                </div>
                <div className="form-row-buttons">
                    <button type="reset" className="reset">Reset</button>
                    <button type="submit">Send <i className="fas fa-paper-plane"></i></button>
                </div> 
            </form>
            <div className="socials">
                <div className="contact-row">
                    <i className="far fa-envelope"></i>
                    <p>mohammadhajali@gmail.com</p>
                </div>
                <div className="contact-row">
                    <a href="https://wa.me/96171563922" className="links" rel="noreferrer" target="_blank">
                        <i className="fab fa-whatsapp"></i>
                        <p>+961 71 563 922</p>
                    </a>
                </div>
                <div className="contact-row">
                    <a href="https://www.instagram.com/el_hajjali/" className="links" rel="noreferrer" target="_blank">
                        <i className="fab fa-instagram"></i>
                        <p>@el_hajjali</p>
                    </a>
                </div>
            </div>
        </div>
    )
}