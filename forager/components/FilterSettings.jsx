import React from 'react';
import Pill from './Pill';
import PillList from './PillList';
import {pillData} from '../data/development';
import '../styles/globals.css';

const FilterSettings = () => {
    const tagsList = pillData.filter(pill => pill.pilltype === "Tags");
    const regionsList = pillData.filter(pill => pill.pilltype === "Regions");
    const categoriesList = pillData.filter(pill => pill.pilltype === "Category");

    return (
        <>
        <h1 className='title'>FILTER</h1>
        <button>
            <img src="icons/icon_exit.svg" alt='Exit button' className="absolute top-[19px] right-[21px] cursor-pointer color-black"/>
        </button>
        <div className='filter-settings'>
                <ul>
                    <li>
                        <h1 className='type'>Tags</h1>
                        <PillList list={tagsList} />
                    </li>
                    <li>   
                        <h1 className='type'>Regions</h1>
                        <PillList list={regionsList} />
                    </li>
                    <li>
                        <h1 className='type'>Categories</h1>
                        <PillList list={categoriesList} />
                    </li>
                </ul>
        </div>
        </>
    );
}

export default FilterSettings;