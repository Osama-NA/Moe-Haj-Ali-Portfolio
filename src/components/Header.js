import React, {useState} from 'react';
import headerImage from '../images/header-img.PNG';
import cameraBackground from '../images/camera-background.jpg';

export const Header = () => {

    const navStyles = {
        show: {display: "flex"},
        hide: {display: "none"}
    }
    const navButtonStyles = {
        down: { margin: "rotateX(0deg)"},
        up: { transform: "rotateX(180deg)"}
    }

    const [showNav, setShowNav] = useState(true);
    const [rotateNavButton, setRotateNavButton] = useState(false);

    const navButtonClick = () => {
        setShowNav(!showNav);
        setRotateNavButton(!rotateNavButton);
    }

    return (
        <div className= "Header" id= "Header">
            <img className="camera" src={cameraBackground} alt="Camera background" />
            <div className="container">
                <nav>
                    <h1><a href="#Header">Mohammad <span>|</span> Haj Ali</a></h1>
                    <ul style={showNav? navStyles.show : navStyles.hide}>
                        <li><p className="view-work-btn">View Work</p></li>
                        <li><p className="about-me-btn">About Me</p></li>
                        <li><p className="contact-me-btn">Contact Me</p></li>
                    </ul>
                    <i className="fa fa-caret-down menu-btn" onClick={navButtonClick} style={rotateNavButton? navButtonStyles.up : navButtonStyles.down}/>
                </nav>
                <div className="info-container">
                    <div className="header-image">
                        <img src={headerImage} alt="Mohammad Haj Ali" />
                    </div>
                    <div className="info">
                        <h1>Mohammad Haj Ali</h1>
                        <p>Hello there! I'm Mohammad, a photographer who can help you capture your good moments.</p>
                        <div className="info-buttons">
                            <button><p className= "view-work-btn">View Work</p></button>
                            <button><p className="contact-me-btn">Contact Me</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
