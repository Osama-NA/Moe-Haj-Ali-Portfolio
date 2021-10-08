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