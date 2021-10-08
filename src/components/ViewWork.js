import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { ImagesFolder } from './nested-components/ImagesFolder';
import eventsImage from '../images/events-img.PNG';
import modelingImage from '../images/modeling-img.PNG';
import preWeddingsImage from '../images/pre-weddings-img.PNG';

export const ViewWork = () => {

    const folders = [
        {
            title: 'Modeling',
            image: modelingImage
        },
        {
            title: 'Events',
            image: eventsImage
        },
        {
            title: 'Weddings',
            image: preWeddingsImage
        }
    ];

    return (
        <div className="View-Work" id="View-Work">
            <h4>My clicks <i className="fa fa-camera"></i></h4>
            <div className="folders">
                {folders.map(folder => {
                    return <ImagesFolder
                        key={uuidv4()}
                        image={folder.image}
                        title={folder.title} />
                })}
            </div>
        </div>
    )
}
