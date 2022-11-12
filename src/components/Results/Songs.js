import React from 'react';
import { HiOutlineClock } from 'react-icons/hi';
import './Results.scss';


// props.tracks={this.state.searchResults}
// props.radioValue={this.state.radioValue}

const Songs = props => {
    return(
        <div className="table-container songs-container">
            <div className="row table-header">
                <div className="col-sm-1">
                    <p>#</p>
                </div>
                <div className="col-sm-6">
                    TITLE
                </div>
                <div className="col-sm-4">
                    ALBUM
                </div>
                <div className="col-sm-1">
                    <HiOutlineClock />
                </div>
            </div>
            {Array.isArray(props.tracks) ? props.tracks.map( result => {
                    return(
                        <div className="row table-row">
                        <div className="col-sm-1 cell index-cell">
                            1
                        </div>
                        <div className="col-sm-6 cell title-cell">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Mjinvincible.jpg/220px-Mjinvincible.jpg" alt="invincible" />
                            <div>
                                <span class="title-span">You Rock My World</span>
                                <span class="artist-span">Michael Jackson</span>
                            </div>
                        </div>
                        <div className="col-sm-4 cell album-cell">
                            <span>Invincible</span>
                        </div>
                        <div className="col-sm-1 cell duration-cell">
                            5:37
                        </div>
                    </div>
                    )
                }) : null}

        </div>

    )
}

export default Songs;