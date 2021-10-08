import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import e1 from '../../images/events/1.jpg';
import e2 from '../../images/events/2.jpg';
import e3 from '../../images/events/3.jpg';

export const Events = () => {

    const images = [e1, e2, e3];

    return (
        images.map((image) => <img src={image} alt={image} key={uuidv4()} />)
    );
}