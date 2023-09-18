import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './Results.scss';

const Artist = props => {
    return(
        <div className="col-sm-2 col-6" id="result-card" key={props.index}>
                <div className="card" id={props.id} onClick={props.getSong ? (e) => props.getSong(e) : null}>
                    <a href={props.artistPage ? props.artistPage : null} target="_blank" rel="noreferrer">
                    <div className="card-image">
                        <img className="card-img-top" src={props.artistPic !== undefined ? props.artistPic :  "https://i.scdn.co/image/ab6761610000e5eb1020c22e0ce742eca7166e65"} alt={props.artist} />
                        <span className="play-circle">
                            <FaPlay />
                        </span>
                    </div>
                    <div className="card-body">
                        <p className="card-title">{props.artist}</p>
                        <p className="card-text">
                            Artist
                        </p>

                    </div>
                    </a>
                </div>
        </div>        
    )
}

export default Artist;