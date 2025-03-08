import React from 'react';
import '../styles/globals.css';

const Search = () => {
    return (
        <div className="search">
            <div className="search-bar">
                <button className="search-button pr-2">
                    <img src="icons/icon_search.svg" alt="Search" />
                </button>
                <input type="text" placeholder="Search for mushrooms..." />
            </div>
            <button className="filter-button float-right">
                    <img src="icons/icon_filter.svg" alt="Filter" />
                </button>
        </div>
    );
};

export default Search;