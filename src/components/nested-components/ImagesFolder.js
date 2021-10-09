import React, {useContext} from 'react';
import {ImagesViewContext} from '../../context/ImagesView';

export const ImagesFolder = ({title, image}) => {

    const {setView} = useContext(ImagesViewContext);

    const imageStyle = {
        "backgroundImage": `url(${image})`,
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
    }

    const handleView = () => {
        setView(title);
        scrollToImages();
    }

    const scrollToImages = () => {
        const position = parseInt(document.querySelector(".images").offsetTop);
        const navHeight = parseInt(document.querySelector(".container nav").offsetHeight);
        window.scrollTo(0, position - navHeight);
    }

    return (
        <div className="images-folder">
            <div className="image" style={imageStyle}>
                <div className="overlay">
                    <p onClick={handleView} className="view-images-btn">View</p>
                </div>
            </div>
            <p className="title">{title}</p>
        </div>
    )
}