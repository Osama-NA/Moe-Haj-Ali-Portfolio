import React, {useState, useEffect} from 'react';
import headerImage from '../images/header-img.PNG';
import cameraBackground from '../images/camera-background.jpg';

export const Header = () => {

    const navStyles = {
        show: {display: "flex"},
        hide: {display: "none"},
        filled: { backgroundColor: "rgb(20, 20, 20)"},
        unfilled: { backgroundColor: "transparent" }
    }

    const navButtonStyles = {
        down: { margin: "rotateX(0deg)"},
        up: { transform: "rotateX(180deg)"}
    }

    const [navColor, setNavColor] = useState(navStyles.unfilled);
    const [showNav, setShowNav] = useState(true);
    const [rotateNavButton, setRotateNavButton] = useState(false);

    const navButtonClick = () => {
        setShowNav(!showNav);
        setRotateNavButton(!rotateNavButton);
    }

    useEffect(() => {
        //Handle nav bar color on scroll event 
        window.addEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY < 200) {
            setNavColor(navStyles.unfilled)
        } else {
            setNavColor(navStyles.filled)
        }
    } 

    const scrollToViewWork = () => {
        const position = getScrollPosition(".View-Work");
        window.scrollTo(0, position);
    }

    const scrollToAboutMe = () => {
        const position = getScrollPosition(".About-Me");
        window.scrollTo(0, position);
    }

    const scrollToContactMe = () => {
        const position = getScrollPosition(".Contact-Me");
        window.scrollTo(0, position);
    }

    const getScrollPosition = (element) => {
        const position = parseInt(document.querySelector(element).offsetTop);
        const navHeight = parseInt(document.querySelector(".container nav").offsetHeight);
        return position - navHeight;
    }

    return (
        <div className= "Header" id= "Header">
            <img className="camera" src={cameraBackground} alt="Camera background" />
            <div className="container">
                <nav style={navColor}>
                    <h1><a href="#Header">Mohammad <span>|</span> Haj Ali</a></h1>
                    <ul style={showNav? navStyles.show : navStyles.hide}>
                        <li><p onClick={scrollToViewWork}>View Work</p></li>
                        <li><p onClick={scrollToAboutMe}>About Me</p></li>
                        <li><p onClick={scrollToContactMe}>Contact Me</p></li>
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
