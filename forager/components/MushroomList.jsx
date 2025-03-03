import React from 'react';
import {mushroomData} from '../data/development';
import Mushroom from './Mushroom';
import '../styles/globals.css';

const MushroomList = () => {
    return (
        <div className="cr">
            <ul className="list">
                {mushroomData.map((mushroom, index) => (
                   <Mushroom key={index} name={mushroom.name} image={mushroom.image} alt={mushroom.alt} isToxic={mushroom.isToxic} isCard={true} />
                ))}
            </ul>
        </div>
    );
};

export default MushroomList;