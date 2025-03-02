import React from 'react';
import '../styles/globals.css';

const Mushroom = ({ name, image, alt, toxic }) => {
    return (
    <div className="list">
        <li className="polaroid-card">
            <div className="polaroid">
                <img src="../public/DeathCap.jpg" alt="A death cap on top of dried wood" />
                <img className="toxic" src="icons/icon_warning.svg" alt="This is a toxic mushroom!" />
            </div>
            <p className="title">Death Cap</p>
        </li>
    </div>
    );
}

export default Mushroom;