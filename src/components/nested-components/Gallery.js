import React from 'react';
import { useSideScroll } from '../../hooks/useSideScroll';
import { Modeling } from './Modeling';
import { Events } from './Events';
import { Weddings } from './Weddings';

export const Gallery = ({ view }) => {

    const scrollRef = useSideScroll();

    const handleSlider = (direction) => {
        if (direction === "left") {
            scrollRef.current.scrollLeft -= window.screen.width / 4;
        } else {
            scrollRef.current.scrollLeft += window.screen.width / 4;
        }
    }

    return (
        <div className="gallery" id="gallery">
            <button onClick={() => handleSlider("left")}><i className="fas fa-chevron-left right"></i></button>
            <div className="gallery-wrapper" ref={scrollRef}>
                { 
                    view === 'Events' ? <Events /> : 
                    view === 'Weddings' ? <Weddings /> : 
                    view === 'Modeling' ? <Modeling /> : []
                }
            </div>
            <button onClick={() => handleSlider("right")}><i className="fas fa-chevron-right left"></i></button>
        </div>
    )
}