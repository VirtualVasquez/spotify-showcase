import React from 'react';
import './SearchPage.scss';
import Songs from '../../Results/Songs/Songs';

const SearchPage = props => {
    return(
        <div className="container" id="search-page">
            <Songs />
        </div>        
    )
}

export default SearchPage;