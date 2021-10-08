import React, { useState, useContext, useEffect } from 'react';
import { ImagesViewContext } from '../context/ImagesView';
import { Gallery } from './nested-components/Gallery';

export const Images = () => {
    
    const weddings = 'Weddings';
    const events = 'Events';
    const modeling = 'Modeling';

    const titleStyle = {
        "focused": { "color": "white" },
        "notFocused": { "color": "rgb(140, 140, 140)" }
    }

    const { view, setView } = useContext(ImagesViewContext);

    const [viewTitle, setViewTitle] = useState(view);

    useEffect(() => {
        setView(viewTitle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [viewTitle]);

    const getTitleStyle = (title) => {
        return title === view ? titleStyle.focused : titleStyle.notFocused;
    }

    return (
        <div className= "images">
            <div className= "folders-titles">
                <p onClick={() => setViewTitle(modeling)} style={getTitleStyle(modeling)} >{modeling}</p>
                <p onClick={() => setViewTitle(events)} style={getTitleStyle(events)} >{events}</p>
                <p onClick={() => setViewTitle(weddings)} style={getTitleStyle(weddings)} >{weddings}</p>
            </div>
            <Gallery view={view} />
        </div>
    )
}
