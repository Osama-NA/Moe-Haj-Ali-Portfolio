import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import m1 from '../../images/modeling/1.jpg';
import m2 from '../../images/modeling/2.jpg';
import m3 from '../../images/modeling/3.jpg';

export const Modeling = () => {

    const images = [m1, m2, m3];

    return (
        images.map((image) => <img src={image} alt={image} key={uuidv4()} />)
    );
}