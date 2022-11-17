import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './Results.scss';

const Album = props => {
    return(
            <div className="col-sm-2 col-6"  id="result-card">
                <a href={props.albumPage} target="_blank" rel="noreferrer">
                <div className="card">
                    <div className="card-image">
                        <img className="card-img-top album-art" src={props.albumPic !== undefined ? props.albumPic : "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2/image-size/original?v=mpbl-1&px=-1"} alt="Card cap" />
                        <span className="play-circle">
                            <FaPlay />
                        </span>
                    </div>
                    <div className="card-body">
                        <p className="card-title album-title">{props.albumName}</p>
                        <p className="card-text">
                            <span className="album-year">{props.albumYear} </span>
                            <span>&bull;</span>
                            <span className="album-artist"> {props.artist}</span>
                        </p>
                    </div>
                </div>
                </a>
            </div>        
    )
}

export default Album;