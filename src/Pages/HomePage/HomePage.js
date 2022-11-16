import React from 'react';
import './HomePage.scss';

const HomePage = props => {
    return(
        <div className="container" id="home">
            <div className="row home-header header">
                <h1>Pseudo Spotify</h1>
                <p>Search for artists, albums or songs on the search page. Or get a random track from one of my favorite artists on the library page.</p>
            </div>
            <div className="row">
                <img src="https://cdn.mos.cms.futurecdn.net/qB6cCJSi4aqcVZvcSXKbDe.jpg" alt='' />
            </div>
        </div>
    )
}

export default HomePage;