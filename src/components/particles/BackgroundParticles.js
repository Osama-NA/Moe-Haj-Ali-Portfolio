import React, {useState, useEffect} from 'react'
import Particles from 'react-particles-js';


export const BackgroundParticles = () => {

    const [canvasStyle, setCanvasStyle] = useState({ display: "none" })

    useEffect(() => {
        setTimeout(() => {
            const style = {
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "-1"
            }
            setCanvasStyle(style);
        }, 2000);
    });

    return (
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 75
                    },
                    "size": {
                        "value": 4
                    }
                }
            }}
            style={canvasStyle} 
        />
    )
}
