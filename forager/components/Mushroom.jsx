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
        <>
            <div className="photo-card">
                <img className="photo" src="images/bigDeathCap.jpg" alt="A death cap on top of dried wood" />
            </div>
            <button className="add float-right p-[10px]">
                <img src="icons/icon_add.svg" alt="Add to favorites" />
            </button>
            <p className="mush-name">Death Cap</p>
            <p className="scientific-name">Amanita phalloides</p>
            <div className="facts">
                <h1 className="facts-head">Fast Facts</h1>
                <p className="facts-text">Cap Diameter: 5-15cm</p>
                <p className="facts-text">Gill Color: White</p>
                <p className="facts-text">Stem Color: White</p>
                <p className="facts-text">Habitat: Temperate regions</p>
            </div>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        </>
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