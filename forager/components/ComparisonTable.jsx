"use client";
import React, { useState } from 'react';
import '../styles/globals.css';

const ComparisonTable = () => {
  const [yourPhoto, setYourPhoto] = useState({
    capShape: 'Flat',
    capColor: 'Brown',
    capTexture: 'Smooth',
    gillsType: 'Free',
    gillsColor: 'White',
    stemShape: 'Slender',
    stemColor: 'White',
    stemRing: 'Absent',
    habitat: '?',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setYourPhoto({ ...yourPhoto, [name]: value });
  };

  return (
    <div className="comparison-table">
      <div className="photos">
        <div className="photo-card">
          <img src="images/yourPhoto.jpg" alt="Your Photo" />
        </div>
        <div className="photo-card">
            <div className="match-badge">
                <img src="icons/icon_toxic.svg" alt="Toxic" />
                <span>97% Match</span>
            </div>
          <img src="images/bigDeathCap.jpg" alt="Death Cap" />
        </div>
      </div>
      <div className="table">
        <div className="column">
          <h3 className="heading font-bold text-2xl ml-[40px]">Your Photo</h3>
          {Object.keys(yourPhoto).map((key) => (
            <div key={key} className="input-row">
              <input
                type="text"
                name={key}
                value={yourPhoto[key]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <div className="column pt-[43px]">
          <div className="row mb-[10px]">Cap Shape </div>
          <div className="row mb-[10px]">Cap Color</div>
          <div className="row mb-[10px]">Cap Texture</div>
          <div className="row mb-[10px]">Gills Type</div>
          <div className="row mb-[10px]">Gills Color</div>
          <div className="row mb-[10px]">Stem Shape</div>
          <div className="row mb-[10px]">Stem Color</div>
          <div className="row mb-[10px]">Stem Ring</div>
          <div className="row mb-[10px]">Habitat</div>
        </div>
        <div className="column">
          <h3 className="heading font-bold text-2xl mr-[40px]">Death Cap</h3>
          <div className="row mb-[10px]">Flat</div>
          <div className="row mb-[10px]">Yellow</div>
          <div className="row mb-[10px]">Smooth</div>
          <div className="row mb-[10px]">Free</div>
          <div className="row mb-[10px]">White</div>
          <div className="row mb-[10px]">Slender</div>
          <div className="row mb-[10px]">White</div>
          <div className="row mb-[10px]">Absent</div>
          <div className="row mb-[10px]">Near oak/beech</div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;