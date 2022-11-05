import React from 'react';
import './SearchPage.scss';
import Songs from '../../Results/Songs/Songs';
import Artists from '../../Results/Artists/Artists';
import Albums from '../../Results/Albums/Albums';



const SearchPage = props => {
    return(
        <div className="container" id="search-page">
            <Songs />
            <Artists />
            <Albums />
        </div>        
    )
}

export default SearchPage;