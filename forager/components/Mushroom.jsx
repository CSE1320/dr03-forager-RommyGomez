import React from 'react';
import '../styles/globals.css';

const Mushroom = ({ name, image, alt, isToxic, isCard }) => {
    if (isCard == true) {
        return (
        <li className="polaroid-card">
            <div className="polaroid">
                <img src={image} alt={alt}/>
                { isToxic ? <img className="toxic" src="icons/icon_toxic.svg" alt="This is a toxic mushroom!" /> : null }
            </div>
            <p className="mush-title">{name}</p>
        </li>
        );
    } else if (isCard == false) {
        return (
        <div className="polaroid">
            <img src="images/deathCap.jpg" alt="A death cap on top of dried wood" />
            <img className="toxic" src="icons/icon_toxic.svg" alt="This is a toxic mushroom!" />
            <p className="mush-title">Death Cap</p>
        </div>
        );
    } else {
        return (
            <div>
                <p className="error text-center">An error has occured. isCard is neither true nor false</p>
            </div>
        );
    }
};


export default Mushroom;