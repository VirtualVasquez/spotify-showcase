import React from 'react';
import './Search.scss';

const Search = props => {
    return(
        <div className="container" id="search-form">
            <div className="row">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="What do you want to listen to?" />

                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
            </div>
            <div className="row" id="radio-buttons">
                <div class="form-check ">
                    <input class="form-check-input" type="radio" name="artists" id="artistRadio" value="Artists" />
                    <label class="form-check-label" for="artistRadio">Artists</label>
                </div>

                <div class="form-check ">
                    <input class="form-check-input" type="radio" name="songs" id="songRadio" value="Songs" />
                    <label class="form-check-label" for="songRadio">Songs</label>
                </div>
                
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="album" id="albumRadio" value="Albums" />
                    <label class="form-check-label" for="albumRadio">Albums</label>
                </div>
            </div>


        </div>

    )
}

export default Search;