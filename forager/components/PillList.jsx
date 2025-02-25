import React from 'react';
import Pill from './Pill';
import '../styles/pill.css';

const PillList = () => {
    const pillTexts = ["Favorites", "Recents", "Pill 3", "Pill 4"];

    return (
        <div>
            {pillTexts.map((text, index) => (
                <Pill key={index} pilltext={text} />
            ))}
        </div>
    );
};

export default PillList;