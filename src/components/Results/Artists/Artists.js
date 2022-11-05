import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './Artists.scss';

const Artists = props => {
    return(
        <div className="row" id="artists-row">
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-image">
                        <img className="card-img-top" src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/155332900_273173237506749_5624823482444457297_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MQrO3M6d5fUAX-o6Q5G&_nc_ht=scontent-mia3-2.xx&oh=00_AfAs_X4N6Nvcf2PuuT4ru36QZJ2Ng2fnCrKibhTkc8qrfg&oe=638DE586" alt="Card image cap" />
                        <span className="play-circle">
                            <FaPlay />
                        </span>
                    </div>
                    <div className="card-body">
                        <p className="card-title">Michael Jackson</p>
                        <p className="card-text">
                            Artist
                        </p>

                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Artists;