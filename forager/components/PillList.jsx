import React from 'react';
import Pill from './Pill';
import '../styles/globals.css';

const PillList = ({ list = [] }) => {
    return (
        <div className='pill-list'>
            <ul>
                <li>
                {list.map((pill, index) => (    
                    <Pill key={index} text={pill.pilltext} type={pill.pilltype} status={pill.isEnabled} />   
                ))}
                </li>
            </ul>
        </div>
    );
};

export default PillList;