import React from 'react';
import './Search.scss';

const Search = props => {
    return(
        <div className="container" id="search-form">
            <div className="row">
                <div className="input-group mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="What do you want to listen to?" 
                    onChange={props.handleUserInput}
                    value={props.value}
                    />

                    <div className="input-group-append">
                        <button 
                          className="btn btn-outline-secondary" 
                          type="button"
                          onClick={props.handleSearch}
                        >
                          Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="row" id="radio-buttons">
                <div className="form-check ">
                    <input 
                    className="form-check-input" 
                    type="radio" 
                    name="inlineRadioOptions" 
                    id="artistRadio" 
                    value="artist"
                    onChange={props.handleRadioInput} 
                    />
                    <label className="form-check-label" htmlFor="artistRadio">Artists</label>
                </div>

                <div className="form-check ">
                    <input 
                    className="form-check-input" 
                    type="radio" 
                    name="inlineRadioOptions" 
                    id="songRadio" 
                    value="track" 
                    onChange={props.handleRadioInput} 
                    />
                    <label className="form-check-label" htmlFor="songRadio">Songs</label>
                </div>
                
                <div className="form-check">
                    <input 
                    className="form-check-input" 
                    type="radio" 
                    name="inlineRadioOptions" 
                    id="albumRadio" 
                    value="album"
                    onChange={props.handleRadioInput}  
                    />
                    <label className="form-check-label" htmlFor="albumRadio">Albums</label>
                </div>
            </div>


        </div>

    )
}

export default Search;