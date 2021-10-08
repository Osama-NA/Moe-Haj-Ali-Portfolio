import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import w1 from '../../images/weddings/1.jpg';
import w2 from '../../images/weddings/2.jpg';
import w3 from '../../images/weddings/3.jpg';


export const Weddings = () => {

    const images = [w1, w2, w3];

    return (
        images.map((image) => <img src={image} alt={image} key={uuidv4()} />)
    );
}