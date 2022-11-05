import React from 'react';
import './SearchPage.scss';
import Songs from '../../Results/Songs/Songs';
import Artists from '../../Results/Artists/Artists';


const SearchPage = props => {
    return(
        <div className="container" id="search-page">
            <Songs />
            <Artists />
        </div>        
    )
}

export default SearchPage;