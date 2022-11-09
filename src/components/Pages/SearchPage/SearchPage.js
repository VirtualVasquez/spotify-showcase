import React from 'react';
import './SearchPage.scss';
import Songs from '../../Results/Songs';
import Artist from '../../Results/Artist';
import Album from '../../Results/Album';



const SearchPage = props => {
    return(
        <div className="container" id="search-page">
            <div className="search-row row">

            </div>
            <div className="result-row row">
                <Songs />
                <Artist />
                <Album />
            </div>
        </div>        
    )
}

export default SearchPage;