import React from 'react';
import './SearchPage.scss';
import Songs from '../../Results/Songs/Songs';
import Artist from '../../Results/Artist/Artist';
import Album from '../../Results/Album/Album';



const SearchPage = props => {
    return(
        <div className="container" id="search-page">
            <Songs />
            <Artist />
            <Album />
        </div>        
    )
}

export default SearchPage;