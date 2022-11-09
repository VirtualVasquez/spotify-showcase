import React from 'react';
import './SearchPage.scss';
import Songs from '../../Results/Songs';
import Artist from '../../Results/Artist';
import Album from '../../Results/Album';
import Search from '../../Search/Search';




const SearchPage = props => {
    return(
        <div className="container" id="search-page">
            <div className="search-row row">
                <Search />
            </div>
            <div className="result-row row">
            </div>
        </div>        
    )
}

export default SearchPage;