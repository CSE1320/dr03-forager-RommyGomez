import React from 'react';
import Pill from './Pill';
import {pillData} from '../data/development';
import '../styles/pill.css';

const PillList = () => {
    return (
        <div>
            <ul>
                <li>
                {pillData.map((pill, index) => (    
                    <Pill key={index} text={pill.pilltext} type={pill.pilltype} status={pill.isEnabled} />   
                ))}
                </li>
            </ul>
        </div>
    );
};

export default PillList;