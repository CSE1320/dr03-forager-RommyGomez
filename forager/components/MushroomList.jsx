import React from 'react';
import '../styles/globals.css';

const MushroomList = () => {
    <>
        <ul className="list">
            <li className="polaroid-card">
            <div className="polaroid">
                <img src="assets/mushroom1.jpg" alt="A Death Cap on a pile of leaves" />
                <img className="toxic" src="../public/icons/icon_warning.svg" alt="Toxic" />
            </div>
            <p className="title">Death Cap</p>
            </li>
            <li className="polaroid-card">
            <div className="polaroid">
                <img
                src="assets/mushroom2.jpg"
                alt="Two Paddy Straws on a pile of dirt"
                />
            </div>
            <p className="title">Paddy Straw</p>
            </li>
            <li className="polaroid-card">
            <div className="polaroid">
                <img
                src="assets/mushroom3.jpg"
                alt="A Destroying Angel atop decaying wood"
                />
                <img className="toxic" src="assets/warning.svg" alt="Toxic" />
            </div>
            <p className="title">Destroying Angel</p>
            </li>
            <li className="polaroid-card">
            <div className="polaroid">
                <img
                src="assets/mushroom4.jpg"
                alt="A False Death Cap on a pile of leaves"
                />
                <img className="toxic" src="assets/warning.svg" alt="Toxic" />
            </div>
            <p className="title">False Death Cap</p>
            </li>
            <li className="polaroid-card">
            <div className="polaroid">
                <img
                src="assets/mushroom5.jpg"
                alt="Three Puffballs atop decaying wood"
                />
            </div>
            <p className="title">Puffball</p>
            </li>
        </ul>
    </>
};

export default MushroomList;