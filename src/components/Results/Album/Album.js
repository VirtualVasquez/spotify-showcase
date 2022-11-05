import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './Album.scss';

const Album = props => {
    return(
        <div className="row" id="album-row">
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-image">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Mjinvincible.jpg/220px-Mjinvincible.jpg" alt="Card image cap" />
                        <span className="play-circle">
                            <FaPlay />
                        </span>
                    </div>
                    <div className="card-body">
                        <p className="card-title album-title">Invincible</p>
                        <p className="card-text">
                            <span className="album-year">2001 </span>
                            <span>&bull;</span>
                            <span className="album-artist"> Michael jackson</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Album;