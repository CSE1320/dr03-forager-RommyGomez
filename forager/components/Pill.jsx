'use client';

import React, { useState } from 'react';
import '../styles/pill.css';

const Pill = ({ key, text, type, isEnabled }) => {
    const [selectionState, setSelectionState] = useState("unselected"); // selected, unselected

    const clickHandler = () => {
        setSelectionState((currentState) => 
            currentState === "unselected" ? "selected" : "unselected"
        );
    };

    const bgColor = selectionState === "selected" ? "#579076" : "#D9D9D9";
    const textColor = selectionState === "selected" ? "#FFFFFF" : "#7C7C7C";

    return (
        <div className='pill' style={{ backgroundColor: bgColor }} onClick={clickHandler}>
            <h1 className='pilltext' style={{ color: textColor }}>
                {text}
            </h1>
        </div>
    );
};

export default Pill;