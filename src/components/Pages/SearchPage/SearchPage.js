import React, {Component} from 'react';
import './SearchPage.scss';
import axios from 'axios';
import Songs from '../../Results/Songs';
import Artist from '../../Results/Artist';
import Album from '../../Results/Album';
import Search from '../../Search/Search';




class SearchPage extends Component {
    constructor(props){
        super(props);
        this.state ={}
        //this.function = this.function.bind(this);
    }

    render(){
        return(
            <div className="container" id="search-page">
                <div className="search-row row">
                    <Search />
                </div>
                <div className="result-row row">
                </div>
            </div>        
        )
    }

}

export default SearchPage;